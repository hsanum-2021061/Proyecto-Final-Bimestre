//Importaciones de nodejs
const express = require('express');
const cors = require('cors');
const { dbConection } = require('../database/config');

class Server {

    constructor(){
        //Configuracion inicial
        this.app = express();
        this.port = process.env.PORT;
        this.categoriaPath = '/api/categorias';
        this.productoPath = '/api/producto';

        //Conectar a base de datos
        this.conectarDB();

        // Middlewares
        this.middlewares();

        //Rutas de la app
        this.routes();
    }

    //Funcion de conexion
    async conectarDB(){
        await dbConection();
    }

    //Un middleware es una función que se ejecuta antes de las rutas
    middlewares(){
        //CORS
        this.app.use(cors());

        //Lectura y parseo del body
        this.app.use(express.json());

        //-directorio publico
        this.app.use(express.static('public'));

    }

    routes(){
        this.app.use(this.categoriaPath, require('../routes/categoria'));
        this.app.use(this.productoPath, require('../routes/producto'));
        
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto ', this.port);
        })
    }

}

//Importamos la clase Server
module.exports = Server;