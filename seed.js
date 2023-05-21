'use strict';

require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL);

const Book = require('./Models/books');

async function seed() {
  const musashi = new Book({
    title: 'Musashi',
    description: 'A samurai\'s journey',
    author: 'Eiji Yoshikawa',
    series: false,
    status: 'completed',
  });

  await musashi.save()
    .then( () => console.log(`saved to the DB`))
    .catch( err => console.error(err));

  mongoose.disconnect();
}

seed();
