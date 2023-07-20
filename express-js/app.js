const http = require('http');

const express = require('express');
const bodyParser =require('body-parser');

const app = express();

app.listen(3000);

app.use(bodyParser.urlencoded({extended :false}));
app.use('/add-product', (req,res,next)=>{

    res.send('<form method="POST" action="/product"><input type="text" name="title"/><button type="submit">Save</button></form>');

});

app.post('/product',(req,res,next)=>{

    console.log(req.body);          
    res.redirect('/');
});


app.use('/',(req,res,next)=>{
    res.send('<h1>Welcome!</h1>');
});
