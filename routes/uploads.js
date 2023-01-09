const { Router } = require('express');
const { check } = require('express-validator');
const {upload, updateImage} = require('../controllers/uploads')



const router = Router();

router.post( '/', upload );
router.put('/:collection/:id',[check('id','No es un id correcto').isMongoId(),
    check('collection').isIn(['cervezas,users']) ], updateImage);




module.exports = router;