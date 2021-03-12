const {Router} = require('express');
const { usersGetPath, usersPostPath } = require('../controllers/users');

const router = Router();

router.get('/',usersGetPath);
router.post('/',usersPostPath);

module.exports= router;