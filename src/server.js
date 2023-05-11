require('dotenv').config();
const express = require('express');
const notFound = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const server = express();
server.use(express.json());
const PORT = process.env.PORT || 3001

//-----Endpoints-----\\
server.get('/', (request, response) => {
  response.status(200).send('Base Endpoint Proof of life')
})

server.get('/test', (request, response) => {
  response.status(200).send('Test Endpoint Proof of Life');
  console.log('Test Endpoint Proof of Life');
});

server.use('*', notFound);
server.use(errorHandler);


function start() {
  server.listen(PORT, () => console.log(`listening on port: ${PORT}`));
}

module.exports = { start, server }