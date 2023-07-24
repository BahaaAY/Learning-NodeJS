
const path = require('path');

const express = require('express');
const bodyParser =require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorController = require('./controllers/error');
const rootDir = require('./util/path');

const app = express();

// app.engine('hbs', expressHBS.engine({extname: '.hbs'})); //for handelebars
// app.set('view engine', 'hbs');
// app.set('views', 'views/handlebars/');

// app.set('view engine','pug'); //For PUG Templating Engine
// app.set('views', 'views/pug');

app.set('view engine','ejs'); 
app.set('views', 'views');


app.use(bodyParser.urlencoded({extended :false}));
app.use(express.static(path.join(rootDir,'public')));

app.use('/admin',adminRoutes);

app.use(shopRoutes.router);



app.use(errorController.get404);


app.listen(3000);


