const path = require('path');

const express = require('express');
const bodyParser =require('body-parser');

const rootDir = require('./util/path');
const homeRoute =require('./routes/home');
const usersRoute =require('./routes/users');





const app = express();

app.listen(3000);


app.use(bodyParser.urlencoded({extended :false}));

app.use(express.static(path.join(rootDir,'public')));

app.use(homeRoute);
app.use(usersRoute);


app.use((req,res,next)=>{
    console.log('rootDir: ', rootDir);
    console.log('404');
    res.status(404).sendFile(path.join(rootDir,'views','404.html'));
});





