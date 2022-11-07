import express from "express";
import minimist from "minimist";
import os from 'os';

const routerProcess = express.Router();
const PORT = parseInt(minimist(process.argv.slice(2))._) || 8080;
routerProcess.get( "/",  (req, res) => {

    res.send(`
    Servidor express en ${PORT} - PID ${process.pid} - ${new Date().toLocaleString()} <br> <br>
    Argumentos de entrada: ${PORT} <br>
    Nombre de la plataforma: ${process.platform} <br>
    Versión de node.js: ${process.version} <br>
    Memoria total reservada: ${process.memoryUsage().heapTotal} <br>
    Path de ejecución: ${process.execPath} <br>
    Process id: ${process.pid} <br>
    Carpeta del proyecto: ${process.cwd()}<br>
    Procesadores: ${os.cpus().length}
    `)
})

export default routerProcess;

/*********** PM2 ***********/

// npm i -g pm2
// pm2 list
// pm2 start server.js --name="Server 1" --watch -- PORT   (modo FORK)
// pm2 start server.js --name="Server 2" --watch -i max  -- 8081  (modo CLUSTER)
// pm2 list
// pm2 delete 0 1 2 3 4

/*********** FOREVER ***********/

// forever start server.js 8080
// forever start server.js 8081
// forever list
// forever stopall (finalizacion de todos los procesos)
