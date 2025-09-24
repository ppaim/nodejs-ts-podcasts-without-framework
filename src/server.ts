import * as http from "http";
import { app } from "./app";
//import { listeners } from "process";

const server = http.createServer(app); // chama o App

const port= process.env.PORT;

server.listen( port,()=> {
    console.log(`servidor iniciado na porta: ${port}`);
})

