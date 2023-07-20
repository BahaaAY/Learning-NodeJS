const express = require('express');

const app = express();


/** Exercise 1
app.use((req,res,next)=>{
    console.log('First Middleware!');
    next();
}); 
app.use((req,res,next)=>{
    console.log('Second Middleware!');
    res.send('<h1>Hello World</h1>')
}); 
*/

app.use('/users',(req,res,next)=>{
    console.log('/users ',req.originalUrl );
    res.send('<ul><li>User1</li></ul>')

});

app.use('/',(req,res,next)=>{
    console.log('/ ' , req.originalUrl);
    res.send('<h1>Hello World</h1>');
});


app.listen(3000);