/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
const path = require('path');

const imageDir = path.resolve(__dirname, './images/');
const fs = require('fs');
const express = require('express');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('images'));

app.get('/', (req, res) => {
  const files = fs.readdirSync(imageDir);
  const randomFiles = shuffleArray(files);
  res.render('index', { images: [randomFiles[0], randomFiles[1], randomFiles[2]] });
});

app.get('/images', (req, res) => {
  const files = fs.readdirSync(imageDir);
  const randomFiles = shuffleArray(files);
  res.send({ images: [randomFiles[0], randomFiles[1], randomFiles[2]] });
});

app.listen(3000, () => {
  console.log('Running');
});

/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
