const express =  require('express');
const cors = require('cors');
const Route = require('../routes/Routes');
const { dbConection } = require('../database/config');
const { Router } = require('express');

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT; 
        this.usersPath='/users';
        this.authPath = '/auth';

        this.connectDB();

        this.middlewares();

        this.routes()
    }
    async connectDB(){
        await dbConection();
    }
    middlewares(){
        this.app.use(cors());

        this.app.use(express.json());

        this.app.use(express.static('public'))
    }
    routes(){
        this.app.use(this.usersPath, Route.Users);
        this.app.use(this.authPath,Route.Auth);

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