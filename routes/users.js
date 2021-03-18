const {Router} = require('express');
const { check } = require('express-validator');
const { usersGetPath, usersPostPath, userEmailPath, userDelete } = require('../controllers/users');
const { emailExist, existUserById } = require('../helpers/dbValidation');
const{
    validationQuerry,
    validatorJWT
} = require('../middlewares');

const router = Router();

router.get('/',usersGetPath);

router.post('/',[
    check('name', 'El nombre es obligatorio').notEmpty(),
    check('password', 'El password debe de ser más de 6 letras').isLength({ min: 6 }),
    check('email','El email es incorrecto').isEmail(),
    check('email','El email ya existe').custom(emailExist),
    validationQuerry,
],usersPostPath);

router.delete('/:id',[
    validatorJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( existUserById ),
    validationQuerry
],userDelete );

module.exports= router;
/**
 *  check('rol','El rol es invalido').isIn(['ADMIN_ROL','USER_ROLE']),
    check('rol','El rol es invalido').custom(async(rol='')=>{
        //base de datos
        //not exist => throw new Error();
    })
 */