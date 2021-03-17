const { response} = require('express');
const User = require('../models/userSchema');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');

/// /users GET
const usersGetPath = (req,res=response)=>{
    res.status(200).send({err:false})
}
/// /users POST
const usersPostPath = async(req,res=response)=>{
    let {name,email,password} = req.body;
    try {
        password = password.toString();
        
        const user = new User({name,password,email,rol:'USER_ROLE'})

        const salt = bcryptjs.genSaltSync();

        user.password = bcryptjs.hashSync(password,salt);

        await user.save();

        res.status(200).send(user);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg:'Los servidores estan prendidos fuegos contacte al admistrador'
        })
    }


    
}

/// /users/email
const userEmailPath=(req,res=response)=>{

    return res.status(200).json({err:false})

}

module.exports={
    usersGetPath,
    usersPostPath,
    userEmailPath
}