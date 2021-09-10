const {body, validationResult} = require('express-validator');
const Category = require('../models/categores');
CategoreyValidator=[
    body('name')
        .trim()
        .escape()
        .not()
        .isEmpty()
        .withMessage('Category name must not be empty!')
        .custom(value=>{
            return Category.findAll({
                name:value
            }).then((categorey)=>{
                if(categorey){
                    return Promise.reject('Category Name already in use');
                }
            })
        }),
        (req,res,next)=>{
            const errors = validationResult(req);
            if (!errors.isEmpty())
              return res.status(422).json({errors: errors.array()});
            next();
        }
]

module.exports =CategoreyValidator