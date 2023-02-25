const { Schema, model } = require('mongoose');

const CategoriaSchema = Schema ({
    nombre: {
        type: String,
        required: [true, 'El nombre de la categoria es obligatorio']
    },
    tipo: {
        type: String,
        required: [true, 'El tipo de categoria es obligatorio']
    },
    estado: {
        type: Boolean,
        require: [true, 'La estado de la categoria es obligatorio']
    },
    stock: {
        type: Number,
        require: true
    },
    agotados: {
        type: Number,
        require: true
    },
    maxVendidos: {
        type: Number,
        require: true
    }
});

module.exports = model('Categoria', CategoriaSchema);