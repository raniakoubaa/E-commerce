
const express=require('express')
const router=express.Router()
const auth = require("../middleware/auth");
const {getProduct, addProducts, getOneProduct, getAllProduct, deleteProduct, EditProducts}=require('../controllers/product.controller');
const roleCheck = require('../middleware/roleCheck');
router.post('/addProduct',auth,roleCheck(['admin']),addProducts)
router.put('/editProduct/:id',auth,roleCheck(['admin']),EditProducts)
router.get('/getOneProduct/:id',getOneProduct)
router.get('/getAllProduct', getAllProduct)
 router.delete('/deleteProduct/:id',auth,roleCheck(['admin']),deleteProduct)
module.exports = router ;
