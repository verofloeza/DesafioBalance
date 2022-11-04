import express from "express";
import { fork } from 'child_process';

const routerChild = express.Router();

const forkedProcess = fork('./src/routes/childSecundario.routes.js');

let cant=100000000;

routerChild.get( "/", (req, res) => {
    if(req.query.cant){
        cant=req.query.cant;
    }else{
        cant
    }
    forkedProcess.send(cant); 
    forkedProcess.on('message', msg => {
        console.log(`mensaje desde el procesos secundario: ${msg}`);
        res.send(msg); 
        
        
    });
    
})

export default routerChild;