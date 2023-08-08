const UserController = require('./controllers/UserController.js');
const SessionController = require('./controllers/SessionController.js');
const express = require("express");
const routes = express();

routes.set('view engine', 'ejs');
routes.set('views', 'src/views');

routes.get('/', (req, res) => {
    res.render('index');
  }); 

routes.get('/exec', (req, res) => {
    res.render('exec');
})
  
routes.post('/login', UserController.loginValidation);
  
routes.get('/dados', (req, res)=>{
    res.send("enviado");
  });
  
routes.post('/sign', UserController.signValidation);

routes.get('/save', SessionController.jwtVerify, (req, res)=>{
  console.log(req.userId);
  res.json({id:"1", nome:"Victor"});
})
module.exports = routes;