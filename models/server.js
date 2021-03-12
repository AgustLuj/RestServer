const express =  require('express');
const cors = require('cors');
const Route = require('../routes/Routes');

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT; 
        this.usersPath='/users';

        this.middlewares();
        this.routes()
    }
    middlewares(){
        this.app.use(cors());

        this.app.use(express.json());

        this.app.use(express.static('public'))
    }
    routes(){
        this.app.use(this.usersPath, Route.users);

        this.app.get("/",(req,res) =>{
            res.status(200).send({Hola:'Que miras?'})
        });
        this.app.get('/prueba',(req,res)=>{
            res.status(200).send({err:false})
        })
    }
    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Server Creado con class',this.port);
        })
    }

}
module.exports=Server