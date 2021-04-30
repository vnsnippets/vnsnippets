import { writeFile } from 'fs';

const ARTICLES_PATH = 'data/articles';
const INDEX_FILE_PATH = 'data/articles/metadata.json';
const URL = (path) => `https://api.github.com/repos/vnsnippets/vnsnippets/contents/${path}`;

var options = {
   headers: { 'user-agent': 'node.js' }
};

const metadata = [];

const HandleArticleDirectory = (e) => {
   if (!e || !e.path || e.path === INDEX_FILE_PATH) return;

   fetch.get(URL(e.path), options)
      .then((response) => {
         const data = response.json();
         data.forEach((item) => metadata.push(item.name))

         console.log(`Directory - ${item.name} :: ${data.length}`)
      });
}

const Execute = () => {
   fetch.get(URL(ARTICLES_PATH), options)
      .then((response) => {
         const data = response.json();

         data.forEach(HandleArticleDirectory);
         console.log("Metadata update complete.");
      });

   writeFile(INDEX_FILE_PATH, JSON.stringify(metadata), 'utf-8', (err) => {
      if (err) throw err;
   });
}

Execute();
