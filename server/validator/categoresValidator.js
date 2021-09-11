const { body, validationResult } = require('express-validator');
const Category = require('../models/categores');
CategoreyValidator = [
    body('name')
        .trim()
        .escape()
        .not()
        .isEmpty()
        .withMessage('Category name must not be empty!')
        .bail()
        .custom(value => {
            return Category.findOne({
                where: {
                    name: value
                }

            }).then((categorey) => {
                if (categorey) {
                    return Promise.reject('Category Name already in use');
                }
            })
        }),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const formetter = (error) => error.msg;
            const categoryErrors = errors.formatWith(formetter).mapped()
            return res.status(422).json({ errors: categoryErrors });
            next();
        }

    }
]

module.exports = CategoreyValidator