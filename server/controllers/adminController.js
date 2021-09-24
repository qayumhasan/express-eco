const User = require('../models/users');
const bcrypt = require('bcrypt');
module.exports.dashboard = (req, res) => {
    res.render('home/home');
}

module.exports.login = (req, res) => {

    res.render('auth/login');
}

module.exports.register = (req, res) => {
    res.render('auth/register');
}

module.exports.storeUser = async (req, res) => {
    const { username, email, password, confirm_password } = req.body;
    await User.findOne({ where: { email: email } }).then(user => {
        if (user) {
            return res.redirect('back');
        }

        return bcrypt.hash(password, 12)
            .then(hashPassword => {
                User.create({
                    'name': username,
                    'email': email,
                    'password': hashPassword,
                })
            }).then(result => {
                res.redirect('/admin/login');
            })
    }).catch(err => {
        console.log(err);
    })
    // res.json(req.body);

}

module.exports.loginUser = async (req, res) => {

    const { email, password } = req.body;

    User.findOne({ where: { email: email } })
        .then(user => {
            if (!user) {
                return res.redirect('back');
            }
            bcrypt.compare(password, user.password)
                .then(doMatch => {
                    if (doMatch) {
                        req.session.isLoggedIn = true;
                        req.session.user = user;

                        // return req.session.save(err=>{
                        //     console.log(err)
                        //     return res.redirect('/admin')
                        // })
                        return res.redirect('/admin')
                    }
                    return res.redirect('/admin/login');
                })


        })
}

module.exports.logout = (req,res) =>{
    req.session.destroy((err)=>{
        return res.redirect('/admin/login');
    })
}