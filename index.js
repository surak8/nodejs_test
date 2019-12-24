/* eslint-disable no-console */
// import express from 'express';
const express = require('express');

const portNum = 3000;
const hostname = 'localhost';
const app = express();
app.get('/', (req, res) => res.send('Hello World!'));
app.listen(portNum, () => {
  console.log(`http://${hostname}:${portNum}/`);
  console.log('Example app listening on port 3000!');
});
