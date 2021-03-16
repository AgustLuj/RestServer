const { response} = require('express');
const User = require('../models/userSchema');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');

/// /users GET
const usersGetPath = (req,res=response)=>{
    res.status(200).send({err:false})
}
/// /users POST
const usersPostPath = (req,res=response)=>{
    let {name,password,rol} = req.body;
    const user = new User({name,password,rol})

    const salt = bcryptjs.genSaltSync();

    user.password = bcryptjs.hashSync(password,salt);

    res.status(200).send(user);
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