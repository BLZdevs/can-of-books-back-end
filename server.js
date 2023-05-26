'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const handleBooks = require('./modules/handleBooks');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

const db = mongoose.connection;

mongoose.connect(process.env.MONGODB_URL);

db.on('error', console.error.bind(console, 'connection error'));
db.once('open',()=>console.log('Mongoose is connecting'));

// this is a commit to show you how to merge into the right branch
app.get('/test', (req, res) => {
  res.send('test request received');
});

app.get('/', (req,res) => res.status(200).send('Default route is working'));

//Added on 5/22nd
app.get('/getBooks', handleBooks.getBooks);

//Added 5/24/23 by LMW
app.post('/getBooks', handleBooks.postBooks);

//Added 5/25/23 by Zg
app.delete('/getBooks/:id',handleBooks.deleteBooks);

app.get('*', (req,res) => {
  res.status(404).send('route not found.');
});
app.use((err,req,res) => res.status(500).send(err));

app.listen(PORT, () => console.log(`listening on ${PORT}`));
