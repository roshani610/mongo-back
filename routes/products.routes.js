const express=require('express');
const router=express.Router();
const productController=require('../controller/product.controller');

router.get("/addProd",(req,resp)=>{
   // resp.render("AddProduct");
   resp.send("hello product");
})

router.post('/addProduct',productController.addProduct);
router.post('/listProducts',productController.listProducts);
router.get('/searchProduct',productController.searchProduct);
router.get('/getProduct',productController.getProduct);
router.post('/updateProduct',productController.updateProduct);
router.delete('/deleteProduct',productController.deleteProduct);

module.exports=router;