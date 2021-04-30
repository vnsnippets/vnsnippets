const fs = require('fs');
const https = require('https');

const ARTICLES_PATH = 'data/articles';
const INDEX_FILE_PATH = 'data/articles/metadata.json';
const URL = (path) => `https://api.github.com/repos/vnsnippets/vnsnippets/contents/${path}`;

var options = {
   headers: { 'user-agent': 'node.js' }
};

const metadata = [];

const HandleArticleDirectory = (e) => {
   if (!e || !e.path || e.path === INDEX_FILE_PATH) return;

   AwaitableHttpsRequest(URL(e.path), options)
      .then((data) => {
         console.log(`Directory - ${e.name} :: ${data.length}`)
      
         data.forEach((item) => {
            if (item) metadata.push(item.name)
         });
      });
}

const Execute = () => {
   AwaitableHttpsRequest(URL(ARTICLES_PATH), options)
      .then((data) => {
         data.forEach(HandleArticleDirectory)

         fs.writeFile(INDEX_FILE_PATH, JSON.stringify(metadata), 'utf-8', (err) => {
            if (err) throw err;
         });
      })

}

const AwaitableHttpsRequest = (url, options) => new Promise((resolve, reject) => {
   https.get(url, options, (response) => {
      response.setEncoding('utf8');
      
      let data = "";
      response.on('data', (e) => data += e);

      response.on('end', () => {
         resolve(JSON.parse(data))
      });
   }).on('error', (err) => {
     reject(err);
   });
});

Execute();
