const express = require('express');
const fs = require('fs');
const data = require('./data.json');

const notes = data.notes;
let nextId = data.nextId;

const app = express();

app.use(express.json());

app.get('/api/notes', (req, res) => {
  const notesArray = [];
  for (const id in notes) {
    notesArray.push(notes[id]);
  }
  res.status(200).json(notesArray);
});

app.get('/api/notes/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (!Number.isInteger(id) || id <= 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
    return;
  }
  if (notes[id]) {
    res.status(200).json(notes[id]);
    return;
  }
  res.status(404).json({ error: 'Cannot find note with id ' + id });
});

app.post('/api/notes', (req, res) => {
  if (!req.body.content) {
    res.status(400).json({ error: 'Content is a required field' });
    return;
  }
  notes[nextId] = req.body;
  notes[nextId].id = nextId;
  fs.writeFile('data.json', JSON.stringify(notes, null, 2), err => {
    if (err) {
      res.status(500).json({ error: 'An unexpected error occurred.' });
      throw err;
    }
    res.status(201).json(notes[nextId]);
    nextId++;
  });
});

app.delete('/api/notes/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (!Number.isInteger(id) || id <= 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
    return;
  }
  if (!notes[id]) {
    res.status(404).json({ error: 'Cannot find note with id ' + id });
    return;
  }
  fs.writeFile('data.json', JSON.stringify(notes, null, 2), err => {
    if (err) {
      res.status(500).json({ error: 'An unexpected error occurred.' });
      throw err;
    }
    delete notes[id];
    res.status(204).json();
  });
});

app.put('/api/notes/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (!Number.isInteger(id) || id <= 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
    return;
  }
  if (!req.body.content) {
    res.status(400).json({ error: 'Content is a required field' });
    return;
  }
  if (!notes[id]) {
    res.status(404).json({ error: 'Cannot find note with id ' + id });
    return;
  }
  fs.writeFile('data.json', JSON.stringify(notes, null, 2), err => {
    if (err) {
      res.status(500).json({ error: 'An unexpected error occurred.' });
      throw err;
    }
    notes[id] = req.body;
    notes[id].id = id;
    res.status(200).json(notes[id]);
  });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
