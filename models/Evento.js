const { Schema, model } = require('mongoose');

const EventoSchema = Schema({

    description: {
        type: String,
        required: true
    },
    foundPlace: {
        type: String,        
        required: true
    },
    foundDate: {
        type: Date,
        required: true
    },
    deliveredDate: {
        type: Date,
        required: true
    },
    registeredDate: {
        type: Date,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    reward: {
        type: Number,
        required: true
    },
    foundPerson: {
        type: String,
        required: true
    },
    deliveredPerson: {
        type: String,
        required: true
    },
    // user: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Usuario',
    //     // required: true
    // }

});

EventoSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});



module.exports = model('Evento', EventoSchema );

