const express = require("express");
const app = express();

app.set('view engine', 'ejs');

app.use('/public', express.static('public', {
    extensions: ['html','css','js']
}));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(5000, () => {
  console.log("Server Running");
});