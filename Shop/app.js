
const path = require('path');

const express = require('express');
const bodyParser =require('body-parser');
const expressHBS = require('express-handlebars');
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const rootDir = require('./util/path');

const app = express();

app.engine('hbs', expressHBS.engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', 'views/handlebars/');

// app.set('view engine','pug'); //For PUG Templating Engine
// app.set('views', 'views/pug');



app.use(bodyParser.urlencoded({extended :false}));
app.use(express.static(path.join(rootDir,'public')));

app.use('/admin',adminData.adminRouter);

app.use(shopRoutes.router);



app.use((req,res,next)=>{
res.status(404).render('404', {pageTitle : 'Page Not Found!'});
});


app.listen(3000);


