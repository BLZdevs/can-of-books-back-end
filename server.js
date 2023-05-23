'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const getBooks = require('./modules/getBooks');

const app = express();
app.use(cors());

const PORT = process.env.PORT;

const db = mongoose.connection;

mongoose.connect(process.env.MONGODB_URL);

db.on('error', console.error.bind(console, 'connection error'));
db.once('open',()=>console.log('Mongoose is connecting'));

// this is a commit to show you how to merge into the right branch
app.get('/test', (request, response) => {

  response.send('test request received');

});

//Added on 5/22nd
app.get('/getBooks', getBooks);

app.get('/', (request,response) => response.status(200).send('Default route is working'));

app.listen(PORT, () => console.log(`listening on ${PORT}`));
