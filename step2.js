const fs = require('fs');
const process = require('process');
const axios = require('axios');

function cat(path) {
  fs.readFile(path, 'utf-8', function (err, data) {
    if (err) {
      console.error(`Error reading ${path}: ${err}`);
      process.exit(1);
    }

    console.log(data);
  });
}

// async await due to url
async function webCat(url) {
  try {
    let resp = await axios.get(url);
    console.log(resp.data.slice(0, 80), '...');
  } catch (err) {
    console.error(`Error fetching ${url}: ${err}`);
    process.exit(1);
  }
}

let path = process.argv[2];

if (path.slice(0, 4) === 'http') {
  webCat(path);
} else {
  cat(path);
}
