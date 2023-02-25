const { response, request } = require('express');
const bcrypt = require('bcryptjs');

//Importación del modelo
const Categoria = require('../models/categoria');

const getCategoria = async (req = request, res = response) => {
    //Condiciones del get
    const query = {};

    const listaCategorias = await Promise.all([
        Categoria.countDocuments(query),
        Categoria.find(query)
    ]);

    res.json({
        msg: 'get Api - Controlador Categoria',
        listaCategorias
    });
}

const postCategoria = async (req = request, res = response) => {

    //Desestructuracion
    const { nombre, tipo, estado } = req.body;
    const categoriaGuardadoDB = new Categoria ({nombre,  tipo, estado});

    //Guardar en BD
    await categoriaGuardadoDB.save();

    res.json({
        msg: 'Post Api - Post Categoria',
        categoriaGuardadoDB
    });
    
}

const putCategoria = async (req = request, res = response) => {
    //req.params sirve para traer parametros de las rutas
    const { id } = req.params;
    const {_id,...resto} = req.body;

    //Editar al usuario por el id
    const categoriaEditado = await Categoria.findByIdAndUpdate(id, resto);
    
    res.json({
        msg: 'PUT editar category',
        id,
        categoriaEditado
    });
}

const deleteCategoria = async(req = request, res = responser) => {
    //req.params sirve para traer parametros de las rutas
    const {id} = req.params;

    //Eliminar fisicamente de la DB
    const categoriaEliminado = await Categoria.findByIdAndDelete(id);
    
    res.json({
        msg: 'DELETE eliminar category',
        categoriaEliminado
    });
}

module.exports = {
    getCategoria,
    postCategoria,
    putCategoria,
    deleteCategoria
}