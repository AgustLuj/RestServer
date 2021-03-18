const validationQuerrys = require("./validationQuerrys");
const validatorJWT = require("./validation-JWT");

module.exports= {
    ...validationQuerrys,
    ...validatorJWT
}