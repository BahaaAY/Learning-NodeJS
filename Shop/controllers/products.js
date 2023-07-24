const products =[];


exports.getAddProduct = (req,res,next)=>{

    res.render('add-product',{pageTitle : 'Add Product', addPage : true});
 }

 exports.postAddProduct = (req,res,next)=>{

    console.log(req.body);          
    products.push({ title: req.body.title });
    res.redirect('/');
}

exports.getProducts = (req,res,next)=>{
    res.render('shop',{products : products, pageTitle: 'Shop', shopPage: true});
}

