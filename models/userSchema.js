const {Schema,model} = require('mongoose');

const UsertSchema = Schema({
    name:{
        type:String,
        required:[true,'El nombre es obligatorio'],
        unique:true,
    },
    password:{
        type:String,
        required:[true,'La contraseña es obligatorio'],
    },
    img:{
        type:String,
    },
    rol:{
        type:String,
        required:true,
        emun:['ADMIN_ROL','USER_ROLE']
    },
    state:{
        type:Boolean,
        default:true,
    },
    google:{
        type:Boolean,
        default:false
    }
    
})
module.exports=model('User',UsertSchema);