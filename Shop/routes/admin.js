const path = require('path');
const express = require('express');

const router = express.Router();

const rootDir = require('./../util/path');

const products =[];

router.get('/add-product', (req,res,next)=>{

   res.render('add-product',{pageTitle : 'Add Product'});
});

router.post('/add-product',(req,res,next)=>{

    console.log(req.body);          
    products.push({ title: req.body.title });
    res.redirect('/');
});

exports.adminRouter = router;
exports.products = products;
