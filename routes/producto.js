//Importaciones
const { Router } = require('express');
const { getProducto, postProducto, putProducto, deleteProducto } = require('../controllers/producto');


const router = Router();

router.get('/mostrarProducto', getProducto);

router.post('/agregarProducto', postProducto);

router.put('/editarProducto/:id', putProducto);

router.delete('/eliminarProducto/:id', deleteProducto);

module.exports = router;