const {Router} = require('express');
const { check } = require('express-validator');
const { loginPostPath,loginPostGoogle } = require('../controllers/auth');
const{
    validationQuerry,
    validatorJWT
} = require('../middlewares');


const router = Router();

router.post('/login',[
    check('email','El correo es obligatorio').isEmail(),
    check('password','La contraseña es obligatorio').notEmpty(),
    validationQuerry,
],loginPostPath);

router.post('/google/login',[
    check('idToken','El token es obligatorio').notEmpty(),
    validationQuerry,
],loginPostGoogle);

module.exports= router;