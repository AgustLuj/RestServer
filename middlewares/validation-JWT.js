const { request, response } = require('express');
const jwt = require('jsonwebtoken');

const validatorJWT = (req=request , res=response, next)=>{
    
    let token = req.header('x-token');

    if(!token){
        return res.status(401).json({
            msg:'No se recibio ningun token'
        })
    }

    try {
        let {uid} = jwt.verify(token, process.env.SECRETPRIVATEKEY);
        req.uid=uid;
        
        next()
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            msg:'Token no valido'
        })   
    }
}
module.exports={
    validatorJWT
}