
const express = require('express');
const bodyParser =require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.listen(3000);

app.use(bodyParser.urlencoded({extended :false}));

app.use(adminRoutes);

app.use(shopRoutes);

