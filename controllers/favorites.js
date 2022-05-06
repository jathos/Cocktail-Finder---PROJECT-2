const User = require('../models/user');

module.exports = {
    show
};

function show(req, res) {
    if (!req.user._id) return res.redirect('/');
    User.findById(req.user._id)
        .then(doc => {
            res.render('cocktails/favorites', { favoritesInfo: doc });
        });
};