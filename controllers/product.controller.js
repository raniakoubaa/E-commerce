const Product = require("../models/Product")
// add products
exports.addProducts = async (req, res) => {
    const { title, description, category, price, quantity,imageUrl } = req.body;
    try {
      const newProduct =  new Product({
        title,
        description,
        category,
        price,
        quantity,
        imageUrl
      });
      newProduct.save();
      res.send(newProduct);
    } catch (error) {
      console.log(error.message);
      res.status(501).json({ errors: error.message });
    }
  };
  /// get all product
  exports.getAllProduct=async(req,res)=>{
try {
  const products=await Product.find().sort({ date: -1 });
  res.send(products)
} catch (error) {
  res.status(501).json({msg:error.message})
}
  }
  /// get One Products by id
exports.getOneProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.send(product);

    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}
/// Delete of product by id
exports.deleteProduct=async(req,res)=>{
  try {
    const productD=await Product.findByIdAndDelete(req.params.id);
    res.send({ msg: `${productD.title} was successfuly deleted` })
  } catch (error) {
    res.status(502).json({msg:error.message})
  }
}

/// Modification of product
exports.EditProducts = async (req, res) => {
  try {
    const EditProduct=await Product.findByIdAndUpdate(req.params.id,{...req.body});
    res.send({msg: " was successfuly modified"})
  } catch (error) {
    res.status(503).json({msg:error.message})
  }
  }
   