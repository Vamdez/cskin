const jwt = require("jsonwebtoken");

class SessionController{

    jwtVerify(req, res, next){
        const token = req.headers['x-access-token'];
        jwt.verify(token, process.env.SECRET, (err, decoded)=>{
            if(err){
             console.log(err)
             return res.status(401).end();
            }
            req.userId = decoded.userId;
            next();
        })
    }
}



module.exports = new SessionController();