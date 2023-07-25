const { where } = require('sequelize');
const Sign = require('../models/login');

class UserController{
    loginValidation(req, res){
        const email = req.body.email;
        const senha = req.body.password;
        const dados = {email:email,
        senha:senha};
    }

    async signValidation(req, res){
      const emailExist = await Sign.findAll({
          where: {email: req.body.email}
      })

      if(emailExist.length > 0){
        res.json({erro:true, msg:'*email já cadastrado'})
        return;
      }
      try{
      await Sign.create({nome:'',email:'vamdez123@gmail.com', password:''});
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