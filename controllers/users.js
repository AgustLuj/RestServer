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
const userDelete = async(req, res = response) => {

    const { id:_id } = req.params;
    const {uid}=req;
    
    console.log(uid)
    // Fisicamente lo borramos
    // const usuario = await Usuario.findByIdAndDelete( id );

    const user = await User.findByIdAndUpdate( _id, { state: false } );


    res.json(user);
}
module.exports={
    usersGetPath,
    usersPostPath,
    userEmailPath,
    userDelete
}