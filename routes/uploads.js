const { Router } = require('express');
const { check } = require('express-validator');
const {upload, updateImage} = require('../controllers/uploads')



const router = Router();
const collection = ['cervezas,users'];

router.post( '/', upload );
router.put('/:collection/:id',[check('id','No es un id correcto').isMongoId(),
    check('collection','no es una coleccion correcta ').isIn(collection)], updateImage);

module.exports = router;