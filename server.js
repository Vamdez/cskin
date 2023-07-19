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
})
app.listen(5000, () => {
  console.log("Server Running");
});