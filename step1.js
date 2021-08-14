const fs = require('fs');
const process = require('process');
const argv = process.argv;

// for (let i = 0; i < argv.length; i += 1) {
//   console.log(i, argv[i]);
// }
//      this will display an array of process.argv
//      EX
//      $node step1.js
//      0 {path to node}
//      1 {path to js file}
//      2 {path to 3rd argument if entered}

function cat(path) {
  fs.readFile(path, 'utf-8', function (err, data) {
    if (err) {
      console.error(`Error reading ${path}: ${err}`);
      process.exit(1);
    }

    console.log(data);
  });
}

cat(process.argv[2]);
// node step1.js one.txt
// this will read the 3rd argument
