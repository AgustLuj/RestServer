const User = require('../models/userSchema');

const emailExist = async( email = '' ) => {

    // Verificar si el email existe
    const existeEmail = await User.findOne({ email });
    if ( existeEmail ) {
        throw new Error(`El correo: ${ email }, ya está registrado`);
    }
}

const existUserById = async( id ) => {

    // Verificar si el correo existe
    const existeUsuario = await User.findById(id);
    if ( !existeUsuario ) {
        throw new Error(`El id no existe ${ id }`);
    }
}

module.exports = {
    emailExist,
    existUserById
}

