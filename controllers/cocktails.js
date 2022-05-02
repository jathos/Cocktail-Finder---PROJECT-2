//const Cocktail = STILL NEED A PATH TO THE MODEL HERE
const fetch = (...args) =>
    import('node-fetch').then(({ default: fetch }) => fetch(...args));
const token = process.env.COCKTAILDB_TOKEN;
const rootURL = 'https://www.thecocktaildb.com/api/json/v1/';

module.exports = {
    showAll
};

function showAll(req, res) {
    fetch(`${rootURL}${token}/random.php`)
        .then(res => res.json())
        .then(cocktailData => {
            res.render('cocktails/show', { cocktailData });
        });
};