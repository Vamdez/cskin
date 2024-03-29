const bcrypt = require('bcrypt');
const { where } = require('sequelize');
const jwt = require('jsonwebtoken');
const Sign = require('../models/login');
const { emit } = require('nodemon');


class UserController{
    async loginValidation(req, res){
      //Validation
      const {email, password} = req.body;
      const emailExist = await Sign.findOne({where: {email: email}})
      if(!emailExist){
        res.status(422).json({msg:'*email não cadastrado', auth:false});
        return;
      }
      const checkPassword = await bcrypt.compare(password, emailExist.password);
      if(!checkPassword){
        res.status(422).json({msg:'*senha ou email incorreto', auth:false});
        return;
      }
      const token = jwt.sign({userId:emailExist.id}, process.env.SECRET, {expiresIn: 300});
      res.status(200).json({msg:'Cadastro realizado com sucesso', auth:true, token});
    }


    async signValidation(req, res){
      const {name, password, email} = req.body
      console.log("FOI");
      //Validations
      let emailExist = await Sign.findOne({where: {email: email}})
      if(emailExist){
        res.status(422).json({msg:'*email já cadastrado', auth:false});
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
      const newEmail = await Sign.findOne({where: {email: email}})
      const token = jwt.sign({userId: newEmail.id}, process.env.SECRET, {expiresIn: 300});
      res.status(200).json({msg: 'Cadastro realizado com sucesso', auth:true, token});
    }catch (error) {
      console.log(error);
      res.status(422).json({msg: 'Ocorreu um erro ao processar a requisição', auth:false});
    }
  }

  async get_UserDatas(req, res){
    const dataUser = await Sign.findOne({where: {id:req.userId}})
    res.status(200).json({name: dataUser['name'], email: dataUser['email']});
  }
}



module.exports = new UserController(); 