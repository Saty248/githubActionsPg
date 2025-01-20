//a simple express server
import express from 'express';

const app = express();

app.get('/', (req, res) => {

  res.send('Hello World! This is a simple express server');

  console.log('Request received from: 2');
 
});

app.listen(3000, () => {
  console.log('App is running on http://localhost:3000');
});