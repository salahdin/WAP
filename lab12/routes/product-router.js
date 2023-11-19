const express = require('express');
const router = express.Router();
const controller = require('../controllers/product-controller');

router.get('/product', controller.getAllProduct);
//router.get('/product/:id',);
router.post('/product/',controller.saveProduct);
//router.put('/product/:id',);
router.delete('/product/:id', controller.deleteProduct);


module.exports = router;
