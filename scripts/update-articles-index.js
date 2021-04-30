const fs = require('fs');
const https = require('https');

const USERNAME = 'vnsnippets';
const INDEXFILE = 'metadata.json';
const URL = (path) => `https://api.github.com/repos/vnsnippets/vnsnippets/contents/${path}`;

var options = {
    headers: {'user-agent': 'node.js'}
};

const metadata = [];
const HandleArticleDirectory = (e, index) => {
  if (!e || !e.name || e.name === INDEXFILE) return;
  console.log("Directory: " + e.name);
  
  https.get(URL(e.path), options, (response) => {
    response.setEncoding('utf8');
    let body = "";
    response.on('data', (data) => body += data);
    
    response.on('end', () => {
      body = JSON.parse(body);
      body.forEach((item) => metadata.push(item.name));
      
      console.log(`Directory: ${e.name} (${body.length})`);
    });
  });
}

const Execute = () => {
  const path = 'data/articles';
  
  https.get(URL(path), options, (response) => {
    response.setEncoding('utf8');
    
    let body = "";
    response.on('data', (data) => body += data);
    
    response.on('end', () => {
      body = JSON.parse(body);
      body.forEach(HandleArticleDirectory);
      
      fs.writeFile('data/metadata.json', JSON.stringify(metadata), 'utf-8', (err) => {
        if (err) throw err;
        console.log('Metadata updated');
      });
    });
  });
}
  
Execute();
