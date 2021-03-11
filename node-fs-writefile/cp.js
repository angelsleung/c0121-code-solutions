const fs = require('fs');

const fileToRead = process.argv[2];
const fileToWrite = process.argv[3];

fs.readFile(fileToRead, 'utf8', (readErr, data) => {
  if (readErr) throw readErr;
  fs.writeFile(fileToWrite, data, 'utf8', writeErr => {
    if (writeErr) throw writeErr;
  });
});
