'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const server = express();
server.use(cors());
server.use(express.json());
const PORT = process.env.PORT || 3001


server.get('/', (request, response) => {
  response.status(200).send('Base Endpoint Proof of life')
})

server.listen(PORT, () => console.log(`listening on ${PORT}`));