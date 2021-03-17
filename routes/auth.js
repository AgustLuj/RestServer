const {Router} = require('express');
const { check } = require('express-validator');
const { loginPostPath } = require('../controllers/auth');
const { validationQuerry } = require('../middlewares/validation');

const router = Router();

router.post('/login',[
    check('email','El correo es obligatorio').isEmail(),
    check('password','La contraseña es obligatorio').notEmpty(),
    validationQuerry,
],loginPostPath);


module.exports= router;