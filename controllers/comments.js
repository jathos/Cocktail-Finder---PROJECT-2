const Comment = require('../models/comment');

module.exports = {
    create
};

function create(req, res) {
    req.body.cocktailId = req.params.id;
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    Comment.create(req.body, function (err, comment) {
        res.redirect(`/cocktails/${req.params.id}`)
    })
};