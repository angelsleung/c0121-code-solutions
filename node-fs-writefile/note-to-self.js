const fs = require('fs');

const input = process.argv.slice(2).join(' ');

fs.writeFile('note.txt', input + '\n', 'utf8', err => {
  if (err) throw err;
});
