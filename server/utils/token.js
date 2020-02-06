const jwt = require('jsonwebtoken');

exports.signToken = (value,key)=>{
    return new Promise((resolve,reject)=>{
        jwt.sign({
            ...value
        }, key, { expiresIn: '2h' },(err,token)=>{
            if(err){
                reject(err);
                return;
            }
            resolve(token);
        });
    })
}

exports.verifyToken = (token,key)=>{
    return new Promise((resolve,reject)=>{
        jwt.verify(token, key ,(err,data)=>{
            if(err){
                reject(err);
                return;
            }
            resolve(data);
        });
    })
}

