const google = require('./google');
const db = require('./dbValidation');
const jwt = require('./generate-jwt');

module.exports={
    ...google,
    ...db,
    ...jwt,
}