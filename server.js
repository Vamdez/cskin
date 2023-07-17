const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.use('/public', express.static('public', {
    extensions: ['html','css','js']
}));

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/dados', (req, res) => {
  const email = req.body.email;
  const senha = req.body.password;
  res.send("Formulário enviado com sucesso. Email: " + email);
});


app.listen(5000, () => {
  console.log("Server Running");
});