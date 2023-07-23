const path = require('path');


const express = require('express');

const router = express.Router();

const rootDir = require('./../util/path');

const adminData = require('./admin');




router.get('/',(req,res,next)=>{
    res.render('shop',{products : adminData.products, pageTitle: 'Shop',hasProducts: adminData.products.length > 0 ,shopPage: true});
});


exports.router = router;