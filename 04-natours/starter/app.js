const express = require('express');
const fs = require('fs');
const app = express();

//parses incoming JSON requests and puts the parsed data in req.body
app.use(express.json());

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);
// console.log(typeof tours);

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: tours,
  });
});

app.post('/api/v1/tours', (req, res) => {
  console.log(req.body);
  res.send('Done');
});
app.get('/', (req, res) => {
  res
    .status(200)
    .json({ message: 'hello from the server side', app: 'Natours' });
});

app.listen(3000, () => {
  console.log('App running on port 3000');
});
