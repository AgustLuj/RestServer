const { response} = require('express');

const usersGetPath = (req,res=response)=>{
    res.status(200).send({err:false})
}
const usersPostPath = (req,res=response)=>{
    let {nombre,edad} = req.body;
    res.status(200).send({err:false,nombre,edad});
}
module.exports={
    usersGetPath,
    usersPostPath
}