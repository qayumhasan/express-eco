const express = require('express')
const bodyParser = require("body-parser")
const Sequelize = require('sequelize');
const sequelize = require('./config/db');
const path = require('path');
require('dotenv').config()
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const categoreyRouter = require('./routes/categores')
const adminRouter = require('./routes/admin')

app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '/public')));

app.set("view engine", "ejs");

app.use('/',categoreyRouter)
app.use('/admin',adminRouter)

const PORT = process.env.PORT || 8080
sequelize.sync()
    .then(() => {
        app.listen(PORT, () => {
            
            console.log(`Server is running ${PORT}`)
        });
    });
    console.log('sdafdsa'+ path.join(__dirname, '/views'));