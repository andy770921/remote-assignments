const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.get('/', (req, res) => {
  //res.send('Hello, My Server!');
  res.render('index');
});
app.get('/getData', (req, res) => {
  if (req.query.number === undefined) {
    res.send('Lack of Parameter');
  }
  else if (Number.isInteger(Number(req.query.number)) && Number(req.query.number) > 0) {
    const ans = (1 + Number(req.query.number)) * Number(req.query.number) / 2;
    res.send(String(ans));
  } else if ((!Number.isInteger(Number(req.query.number)) || Number(req.query.number) <= 0)) {
    res.send('Wrong Parameter');
  }
});

app.use(express.static('public'));

app.listen(3000, () => {
  console.log('The application is running on localhost:3000');
});