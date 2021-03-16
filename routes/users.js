const {Router} = require('express');
const { check } = require('express-validator');
const { usersGetPath, usersPostPath, userEmailPath } = require('../controllers/users');
const { validationQuerry } = require('../middlewares/validation');

const router = Router();

router.get('/',usersGetPath);

router.post('/email',[
    check('email','El email es incorrecto').isEmail(),
    //check('rol','El rol es invalido').isIn(['ADMIN_ROL','USER_ROLE']),
    validationQuerry,
    /*check('rol','El rol es invalido').custom(async(rol='')=>{
        //base de datos
        //not exist => throw new Error();
    })*/
],userEmailPath);

router.post('/',usersPostPath);

module.exports= router;