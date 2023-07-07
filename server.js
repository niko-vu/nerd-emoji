const express = require('express');
const path = require('path');
const api = require('./routes/index.js');

const app = express();
const PORT = 3001;

const middleware = (req, res, next) => {
    // fill out later
  next();
};

app.use(middleware);

app.get('/', (req, res) => res.json(`GET route`));
app.post('/', (req, res) => res.json(`POST route`));
app.put('/:id', (req, res) => res.json(`PUT route`));
app.delete('/:id', (req, res) => res.json(`DELETE route`));
app.patch('/:id', (req, res) => res.json(`PATCH route`));

app.listen(PORT, () =>
  console.log(`Listening for requests on port ${PORT}!`)
);
