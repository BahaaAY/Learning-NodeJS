
const path = require('path');

const express = require('express');
const bodyParser =require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const rootDir = require('./util/path');

const app = express();

app.listen(3000);

app.use(bodyParser.urlencoded({extended :false}));
app.use(express.static(path.join(rootDir,'public')));

app.use('/admin',adminRoutes);

app.use(shopRoutes.router);

app.use((req,res,next)=>{
res.status(404).sendFile(path.join(rootDir,'views','404.html'));
});

