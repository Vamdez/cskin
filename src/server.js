require('dotenv').config();
const express = require("express");
const app = express();
const db = require('./models/db');
const sign = require('./models/login');
const bodyParser = require('body-parser');
const { name } = require('ejs');


app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', 'src/views');

app.use('/public', express.static('public', {
    extensions: ['html','css','js']
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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
  const nome = req.body['nome'];
  const email = req.body['sign-email'];
  sign.create({password:senha, nome:nome, email:email})
  .then(function(response){
    console.log("Dados adicionados");
    res.json({
      erro:false,
      msg:'Cadastro realizado com sucesso'
    })
  }).catch((error)=>{
    const name_error = error['name'];
    console.log("ERRO:", name_error);
    if(name_error === 'SequelizeUniqueConstraintError'){
      res.json({
        erro:true,
        msg:'*email já cadastrado'});
    }
  });

});

app.listen(5000, () => {
  console.log("Server Running");
});