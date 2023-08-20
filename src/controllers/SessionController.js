const jwt = require("jsonwebtoken");

class SessionController{

    constructor(){
        this.blacklist = ["ola"];
    }

    jwtVerify(req, res, next){
        const token = req.headers['x-access-token'];
        if (this.blacklist.includes(token)) {
            return res.status(402).json("DEU CERTO").end();
        }
        jwt.verify(token, process.env.SECRET, (err, decoded)=>{
            if(err){
             console.log(err)
             return res.status(401).end();
            }
            req.userId = decoded.userId;
            next();
        })
    }

    logout(req, res, next){
        this.blacklist.push(req.headers['x-access-token']);
        next();
    }
}


module.exports = new SessionController();