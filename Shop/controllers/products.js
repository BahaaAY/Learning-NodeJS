const Product = require('../models/product');
exports.getAddProduct = (req,res,next)=>{

    res.render('add-product',{pageTitle : 'Add Product', addPage : true});
 }

 exports.postAddProduct = (req,res,next)=>{

    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}

exports.getProducts = (req,res,next)=>{
    Product.fetchAll((products)=>{
        
    res.render('shop',{products :products, pageTitle: 'Shop', shopPage: true});
        
    });

}

