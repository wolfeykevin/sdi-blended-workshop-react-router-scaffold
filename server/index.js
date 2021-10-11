const express = require('express');
const app = express();
const port = 3001;
const dummy = require('./dummy.js');
const cors = require('cors');

app.use(cors())

app.get('/', (req, res) => {
  res.status(200).json(dummy);
})

app.listen(port, () => {
  console.log('Bottega Server listening on port ' + port);
})
module.exports = app;