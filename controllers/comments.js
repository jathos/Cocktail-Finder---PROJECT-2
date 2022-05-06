const { redirect } = require('express/lib/response');
const Comment = require('../models/comment');

module.exports = {
    create,
    deleteComment,
    editPage,
    editComment
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

function deleteComment(req, res, next) {
    let redirectId
    Comment.findById(req.params.id)
        .then(function (doc) {
            if (!doc.user.equals(req.user._id)) return res.redirect('/');
            redirectId = doc.cocktailId;
            doc.remove()
                .then(function () {
                    res.redirect(`/cocktails/${redirectId}`);
                }).catch(function (err) {
                    return next(err);
                });
        });
};

function editPage(req, res) {
    Comment.findById(req.params.id)
        .then(doc => {
            res.render('comments/edit', { doc });
        });
};

function editComment(req, res) {
    let redirectId
    Comment.findById(req.params.id)
        .then(doc => {
            if (!doc.user.equals(req.user._id)) return res.redirect('/')
            redirectId = doc.cocktailId;
            doc.text = req.body.text;
            doc.save(function (err) {
                res.redirect(`/cocktails/${redirectId}`);
            });
        });
};