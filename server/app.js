const express = require('express')
const bodyParser = require("body-parser")
const Sequelize = require('sequelize');
const sequelize = require('./config/db');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session')
const flash = require('connect-flash');


require('dotenv').config()
const app = express();

app.use(expressLayouts);

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const categoreyRouter = require('./routes/categores')
const adminRouter = require('./routes/admin')

app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '/public')));


app.set("view engine", "ejs");
app.set('layout', 'layout');

app.use('/',categoreyRouter)
app.use('/admin',adminRouter)

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }))

app.use(flash());

const PORT = process.env.PORT || 8080
sequelize.sync()
    .then(() => {
        app.listen(PORT, () => {
            
            console.log(`Server is running ${PORT}`)
        });
    });
