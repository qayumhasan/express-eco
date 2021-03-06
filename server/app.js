const express = require('express')
const bodyParser = require("body-parser")
const Sequelize = require('sequelize');
const sequelize = require('./config/db');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session')
const flash = require('connect-flash');
const Categorey = require('./models/categores');
const SubCategoy = require('./models/sub_categores');
const {relationwith} = require('./models/index');
var MySQLStore = require('express-mysql-session')(session);
var cookieParser = require('cookie-parser');
const {isAuthenticated} = require('./middleware/IsAuthenticated');


require('dotenv').config()
const app = express();

app.use(expressLayouts);

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser());

const categoreyRouter = require('./routes/categores')
const adminRouter = require('./routes/admin')
const subcategoreyRouter=require('./routes/sub_categores');
const productRouter = require('./routes/product');





app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '/public')));


app.set("view engine", "ejs");
app.set('layout', 'layout');

var options = {
	host: process.env.DB_HOST,
	port: 3306,
	user: 'root',
	password: '',
	database: 'exp_eco1'
};

var sessionStore = new MySQLStore(options);


app.use(session({
  secret: "secret",
  resave: false,
  store: sessionStore,
  saveUninitialized: false,
  cookie: {
      // secure: true,
      // httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24
      
  }
}));

app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});

app.use(flash());

app.use('/sub-categores',isAuthenticated,subcategoreyRouter)
app.use('/categores',isAuthenticated,categoreyRouter)
app.use('/products',isAuthenticated,productRouter)
app.use('/admin',adminRouter)

// route for client site

// app.use('/',function(req,res){
//   res.render('./clients/index',{ layout: false });
// })
relationwith()
const PORT = process.env.PORT || 8080
sequelize.sync()
    .then(() => {
        app.listen(PORT, () => {
            
            console.log(`Server is running ${PORT}`)
        });
    });
