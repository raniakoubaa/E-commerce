const express=require('express')
const router=express.Router()
const { addCartItems, getCartItems, deleteCart } = require("../controllers/Cart.controller");
const auth = require("../middleware/auth");
// fetch the items in the cart of a particular user
router.get('/getCart/:id', auth, getCartItems);

// add items to the user's cart
router.post('/addCart/:id', auth, addCartItems );
router.delete('/deleteCart/:userId/:itemId',auth,deleteCart);
module.exports=router;