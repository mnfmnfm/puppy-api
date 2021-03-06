'use strict';

require('dotenv').config();
const express = require('express');
const app = express();

// use environment variable, or, if it's undefined, use 3000 by default
const PORT = process.env.PORT || 3000;

console.log(process.env.POTATO);

app.use(express.static('./public'));

app.get('/isitworking', (request, response) => {
  response.send('yes');
});

app.get('/bailey', (request, response) => {
  try {
    let baileyData = require('./data/puppy.json');
    response.send(baileyData);
  } catch( error ) {
    console.log('there was an error');
    response.status(500).send('sorry, error');
  }

});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
