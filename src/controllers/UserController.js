const bcrypt = require('bcrypt');
const { where } = require('sequelize');
const Sign = require('../models/login');


class UserController{
    async loginValidation(req, res){
      //Validation
      const {email, password} = req.body;
      console.log(email)
      console.log(password)
      const emailExist = await Sign.findOne({
        where: {email: email}
      })
      if(!emailExist){
        res.json({erro:true, msg:'*email não cadastrado'});
        return;
      }
      const checkPassword = await bcrypt.compare(password, emailExist.password);
      if(!checkPassword){
        res.json({erro:true, msg:'*senha ou email incorreto'});
        return;
      }
      res.json({erro:false, msg:'Cadastro realizado com sucesso'});
    }

    async signValidation(req, res){
      const {name, password, email} = req.body

      //Validations

      const emailExist = await Sign.findOne({
          where: {email: email}
      })
      if(emailExist){
        res.json({erro:true, msg:'*email já cadastrado'});
        return;
      }

      //Crypt Password

      const salt = await bcrypt.genSalt(12);
      const passwordHash = await bcrypt.hash(password, salt);

      //Create User

      try{
      await Sign.create({
        name,
        email,
        password : passwordHash
      });
      console.log("Dados adicionados");
      res.json({
        erro: false,
        msg: 'Cadastro realizado com sucesso'
      });
    }catch (error) {
      console.log(error);
      res.json({erro: true,msg: 'Ocorreu um erro ao processar a requisição'});
    }
  }
}



module.exports = new UserController(); 