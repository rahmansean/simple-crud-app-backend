const express= require("express");
const router=express.Router();

const {getProducts,getSingleProduct,createProducts,updateProduct,deleteProduct}= require('../controllers/product.controllers.js');


router.get('/',getProducts);
router.get('/:id',getSingleProduct);
router.post('/',createProducts);
router.put('/:id',updateProduct);
router.delete('/:id',deleteProduct);

module.exports=router;