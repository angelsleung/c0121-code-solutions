const express = require('express');
const path = require('path');

const app = express();
const pathName = path.join(__dirname, 'public');
const serve = express.static(pathName);
app.use(serve);

app.listen(3000, () => {
  console.log('Listening on port 3000!');
});
