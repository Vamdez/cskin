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

let dados={};

app.post('/dados', (req, res) => {
  const email = req.body.email;
  const senha = req.body.password;
  dados = {email:email,
  senha:senha};
});

app.get('/dados', (req, res)=>{
  res.send("enviado");
});

app.post('/sign', (req, res)=>{
  const senha = req.body['sign-password'];
  const confirmacaoSenha = req.body['confirm-password'];
  res.send("Dados recebidos")
});

app.listen(5000, () => {
  console.log("Server Running");
});