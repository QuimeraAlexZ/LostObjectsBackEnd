/*
    Event Routes
    /api/events
*/
const { Router } = require('express');
const { check } = require('express-validator');

const { isDate } = require('../helpers/isDate');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');

const router = Router();

// Todas tienes que pasar por la validación del JWT
// router.use( validarJWT );


// Obtener eventos 
router.get('/', getEventos );

// Crear un nuevo evento
router.post(
    '/',
    [
        check('description','La descripción es obligatoria').not().isEmpty(),
        check('foundPlace','Lugar de encontrado es obligatorio').not().isEmpty(),
        check('foundDate','Fecha de encuntro es obligatoria').custom( isDate ),
        check('deliveredDate','Fecha de entrega es obligatoria').custom( isDate ),
        check('registeredDate','Fecha de registro es obligatoria').custom( isDate ),
        check('color','El color es obligatorio').not().isEmpty(),
        check('reward','La recompensa es obligatoria').not().isEmpty(),
        check('foundPerson','La persona que encuentra es obligatoria').not().isEmpty(),
        check('deliveredPerson','La persona que entrega es obligatoria').not().isEmpty(),
        validarCampos
    ],
    crearEvento 
);

// Actualizar Evento
router.put(
    '/:id', 
    [
        // check('description','La descripción es obligatoria').not().isEmpty(),
        // check('foundPlace','Lugar de encontrado es obligatorio').not().isEmpty(),
        // check('foundDate','Fecha de encuntro es obligatoria').custom( isDate ),
        // check('deliveredDate','Fecha de entrega es obligatoria').custom( isDate ),
        // check('registeredDate','Fecha de registro es obligatoria').custom( isDate ),
        // check('color','El color es obligatorio').not().isEmpty(),
        // check('reward','La recompensa es obligatoria').not().isEmpty(),
        // check('foundPerson','La persona que encuentra es obligatoria').not().isEmpty(),
        // check('deliveredPerson','La persona que entrega es obligatoria').not().isEmpty(),
        validarCampos
    ],
    actualizarEvento 
);

// Borrar evento
router.delete('/:id', eliminarEvento );

module.exports = router;