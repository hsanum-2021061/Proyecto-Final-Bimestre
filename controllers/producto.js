const { response, request } = require('express');
const bcrypt = require('bcryptjs');

//Importación del modelo
const Producto = require('../models/producto');

const getProducto = async (req = request, res = response) => {
    //Condiciones del get
    const query = {};

    const listaProducto = await Promise.all([
        Producto.countDocuments(query),
        Producto.find(query)
    ]);

    res.json({
        msg: 'get Api - Controlador Producto',
        listaProducto
    });
}

const postProducto = async (req = request, res = response) => {

    //Desestructuracion
    const { nombre, tipo, estado } = req.body;
    const productoGuardadoDB = new Producto ({nombre,  tipo, estado});

    //Guardar en BD
    await productoGuardadoDB.save();

    res.json({
        msg: 'Post Api - Post Producto',
        productoGuardadoDB
    });
    
}

const putProducto = async (req = request, res = response) => {
    //req.params sirve para traer parametros de las rutas
    const { id } = req.params;
    const {_id,...resto} = req.body;

    //Editar al usuario por el id
    const productoEditado = await Producto.findByIdAndUpdate(id, resto);
    
    res.json({
        msg: 'PUT editar producto',
        id,
        productoEditado
    });
}

const deleteProducto = async(req = request, res = responser) => {
    //req.params sirve para traer parametros de las rutas
    const {id} = req.params;

    //Eliminar fisicamente de la DB
    const productoEliminado = await Producto.findByIdAndDelete(id);
    
    res.json({
        msg: 'DELETE eliminar producto',
        productoEliminado
    });
}

module.exports = {
    getProducto,
    postProducto,
    putProducto,
    deleteProducto
}