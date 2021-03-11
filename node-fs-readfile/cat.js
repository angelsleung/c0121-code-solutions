const fs = require('fs');

const files = process.argv.slice(2); // array of filenames [cunningham.txt, dijkstra.txt hopper.txt]

const readAllFiles = index => {
  if (index === files.length) {
    return;
  }
  fs.readFile(files[index], 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
    readAllFiles(index + 1);
  });
};

readAllFiles(0);
