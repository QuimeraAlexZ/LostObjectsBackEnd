const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    adress: [
        { 
        street: {
            type: String,
            required: true
        }, 
        number: {
            type: String,
            required: true
        },
        colony: {
            type: String,
            required: true
        },
        county: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        postalCode: {
            type: String,
            required: true
        }
}
]
});


module.exports = model('Usuario', UsuarioSchema );

