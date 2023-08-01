const express = require("express");
const routes = express();
const UserController = require('./controllers/UserController.js')

routes.set('view engine', 'ejs');
routes.set('views', 'src/views');

routes.get('/', (req, res) => {
    res.render('index');
  });

routes.get('/exec', (req, res) => {
    res.render('exec');
})
  
routes.post('/dados', UserController.loginValidation);
  
routes.get('/dados', (req, res)=>{
    res.send("enviado");
  });
  
routes.post('/sign', UserController.signValidation);

module.exports = routes;