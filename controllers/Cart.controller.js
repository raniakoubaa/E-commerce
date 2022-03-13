const Cart = require("../models/Cart")
const Product=require("../models/Product")
module.exports.getCartItems = async (req, res) => {
    const userId = req.params.id;
    try {
        const cart = await Cart.findOne({ userId })
      
        res.send(cart);
      
    } catch (error) {
        res.status(500).json({ errors: error.message })
    }
}
module.exports.addCartItems = async (req, res) => {
    // const productId = req.params.id;
    const { userId, quantity,productId } = req.body;
    try {
        const cart = await Cart.findOne({ userId });
        const item = await Product.findOne({ _id: productId });
        const name = item.name;
        const price = item.price;
        if (!item) {
            res.status(400).send("Item not found");
        }
    
        if (cart) {
            // if The cart doesn't exist for the User
            let itemIndex = cart.items.findIndex((p) => p.productId == productId);
            //chek if the product do exesit in card or not
            if (itemIndex >= 0) {
                let productItem = cart.items[itemIndex];
                productItem.quantity += quantity;
                cart.items[itemIndex] = productItem;
                
            }
             else {
               cart.items.push({ productId, name, quantity, price });
             }
            cart.bill += quantity * price;
            cart.save();
            return res.status(201).send(cart);
        } 
        else {
            //if there is no cart exist , this will creat a new cart
            const newCart = await Cart.create({
                userId,
                items: [{ productId, name, quantity, price }],
                bill: quantity * price,
            });
            return res.status(201).send(newCart);
        }

    } catch (error) {
        res.status(501).json({ msg: error.message })
    }
}
module.exports.deleteCart=async(req,res)=>{
    const userId=req.params.userId;
    const productId=req.params.itemId;
    try {
        let cart=await Cart.findOne({userId});
        let itemIndex=cart.items.findIndex((p)=>p.productId==productId);
        if(itemIndex>-1){
            let productItem=cart.items[itemIndex];
            cart.bill-=productItem.quantity*productItem.price;
            if( cart.bill<=0){
                cart.bill=0;
            }
            cart.items.splice(itemIndex,1)
        }
        cart=await cart.save();
        return res.status(201).send(cart);
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:error.message})
    }
}