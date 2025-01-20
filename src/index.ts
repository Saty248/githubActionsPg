//a simple express server
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  console.log('Request received');
  res.send('Hello World 2!');
});

app.listen(3000, () => {
  console.log('App is running on http://localhost:3000');
});