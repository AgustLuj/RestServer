const { response} = require('express');
const User = require('../models/userSchema');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const {generateJWT} = require('../helpers/generate-jwt');

/// /users GET
const loginPostPath = async (req,res=response)=>{
    let {email,password}=req.body;
    try {
        password = password.toString();
        //Email exist
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({
                "msg":'El correo o la contraseña es incorrecta'
            })
        }
        //State == false
        if(!user.state){
            return res.status(400).json({
                "msg":'El usuario no existe'
            })
        }
        // Password the same
        const passCompare = bcryptjs.compareSync(password,user.password);
        if(!passCompare){
            return res.status(400).json({
                "msg":'El correo o la contraseña es incorrecta'
            })
        }
        //Generate de JWt

        const token = await generateJWT(user._id);

        res.status(200).send({err:false,email,password,token, user});


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg:'Los servidores estan prendidos fuegos contacte al admistrador'
        })
    }
}

module.exports={
    loginPostPath,
}