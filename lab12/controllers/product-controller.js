const Product = require('../models/product')


exports.getAllProduct = (req, res) => {
    const products = Product.getAllProduct();
    res.json(products); 
}

exports.saveProduct = (req, res)=>{
    console.log(req.body)
    const {title, description, price} = req.body
    new Product(title, description, price).save()
    res.status(200).end();
}

exports.deleteProduct = (req, res)=>{
    const id = req.params.id;
    Product.delete(id);
    res.status(200).end();
}