const jwt = require("jsonwebtoken");

class SessionController{

    constructor(){
        this.blacklist = ["ola"];
        console.log(this.blacklist);
    }

    jwtVerify(req, res, next){
        const token = req.headers['x-access-token'];
        console.log(this.blacklist)
        if (this.blacklist.includes(token)) {
            return res.status(402).json("DEU CERTO").end();
        }
        jwt.verify(token, process.env.SECRET, (err, decoded)=>{
            if(err){
             console.log(err)
             return res.status(401).end();
            }
            req.userId = decoded.userId;
            console.log(token);
            next();
        })
    }

    logout(req, res, next){
        this.blacklist.push(req.headers['x-access-token']);
        next();
    }
}


module.exports = new SessionController();