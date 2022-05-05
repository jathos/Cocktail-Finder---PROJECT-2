const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({

    user: { type: Schema.Types.ObjectId, ref: 'User' },
    userName: String,
    userAvatar: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Comment', commentSchema);