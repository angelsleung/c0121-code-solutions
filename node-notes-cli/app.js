const fs = require('fs');
const data = require('./data.json');

const input = process.argv.slice(2);
const action = input.shift();

switch (action) {
  case 'read':
    for (let i = 1; i < data.nextId; i++) {
      if (data.notes[i]) {
        console.log(i + ':', data.notes[i]);
      }
    }
    break;

  case 'create':
    data.notes[data.nextId] = input[0];
    data.nextId++;
    fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
      if (err) throw err;
    });
    break;

  case 'delete':
    delete data.notes[input[0]];
    fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
      if (err) throw err;
    });
    break;

  case 'update':
    data.notes[input[0]] = input[1];
    fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
      if (err) throw err;
    });
    break;

  default:
    console.log('Invalid input');
}
