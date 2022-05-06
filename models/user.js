const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
    idDrink: String,
    strDrink: String,
    strIngredient1: String,
    strGlass: String,
    strDrinkThumb: String,
    strAlcoholic: String,
    strCategory: String
}, {
    timestamps: true
});

const userSchema = new Schema({
    name: String,
    googleId: {
        type: String,
        required: true
    },
    email: String,
    avatar: String,
    favorites: [favoriteSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);