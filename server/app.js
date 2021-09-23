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



require('dotenv').config()
const app = express();

app.use(expressLayouts);

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const categoreyRouter = require('./routes/categores')
const adminRouter = require('./routes/admin')
const subcategoreyRouter=require('./routes/sub_categores');
const productRouter = require('./routes/product');
const SubCategorey = require('./models/sub_categores');
const Categores = require('./models/categores');

app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '/public')));


app.set("view engine", "ejs");
app.set('layout', 'layout');

app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
}))

app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});

app.use(flash());

app.use('/sub-categores',subcategoreyRouter)
app.use('/categores',categoreyRouter)
app.use('/products',productRouter)
app.use('/admin',adminRouter)

relationwith()



// SubCategorey.belongsTo(Categores,{constraints:true,onDelete:'CASCADE'})
// Categores.hasMany(SubCategorey)

const PORT = process.env.PORT || 8080
sequelize.sync({force:true})
    .then(() => {
        app.listen(PORT, () => {
            
            console.log(`Server is running ${PORT}`)
        });
    });
