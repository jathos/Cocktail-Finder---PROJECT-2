const { search } = require('../routes');

// const Cocktail = STILL NEED A PATH TO THE MODEL HERE
const fetch = (...args) =>
    import('node-fetch').then(({ default: fetch }) => fetch(...args));
const token = process.env.COCKTAILDB_TOKEN;
const rootURL = 'https://www.thecocktaildb.com/api/json/v1/';

module.exports = {
    showAll,
    showSearch,
    showOne,
    showA,
    showB,
    showC,
    showD,
    showE,
    showF,
    showG,
    showH,
    showI,
    showJ,
    showK,
    showL,
    showM,
    showN,
    showO,
    showP,
    showQ,
    showR,
    showS,
    showT,
    showU,
    showV,
    showW,
    showX,
    showY,
    showZ
};

function showAll(req, res) {
    fetch(`${rootURL}${token}/random.php`)
        .then(res => res.json())
        .then(cocktailData => {
            res.render('cocktails/show', { cocktailData });
        });
};

function showSearch(req, res) {
    let searchData = req.query.search;
    if (req.query.criteria == "name") {
        fetch(`${rootURL}${token}/search.php?s=${searchData}`)
            .then(res => res.json())
            .then(cocktailData => {
                res.render('cocktails/show', { cocktailData, searchData });
            });
    } else {
        fetch(`${rootURL}${token}/filter.php?i=${searchData}`)
            .then(res => res.json())
            .then(cocktailData => {
                res.render('cocktails/search', { cocktailData, searchData });
            })
            .catch(err => {
                let cocktailData = {
                    drinks: null
                };
                res.render('cocktails/search', { cocktailData, searchData });
            });
    };
};

function showOne(req, res) {
    fetch(`${rootURL}${token}/lookup.php?i=${req.params.id}`)
        .then(res => res.json())
        .then(cocktailData => {
            res.render('cocktails/details', { cocktailData });
        })
};

function showA(req, res) {
    fetch(`${rootURL}${token}/search.php?f=a`)
        .then(res => res.json())
        .then(cocktailData => {
            res.render('cocktails/show', { cocktailData });
        });
};

function showB(req, res) {
    fetch(`${rootURL}${token}/search.php?f=b`)
        .then(res => res.json())
        .then(cocktailData => {
            res.render('cocktails/show', { cocktailData });
        });
};

function showC(req, res) {
    fetch(`${rootURL}${token}/search.php?f=c`)
        .then(res => res.json())
        .then(cocktailData => {
            res.render('cocktails/show', { cocktailData });
        });
};

function showD(req, res) {
    fetch(`${rootURL}${token}/search.php?f=d`)
        .then(res => res.json())
        .then(cocktailData => {
            res.render('cocktails/show', { cocktailData });
        });
};

function showE(req, res) {
    fetch(`${rootURL}${token}/search.php?f=e`)
        .then(res => res.json())
        .then(cocktailData => {
            res.render('cocktails/show', { cocktailData });
        });
};

function showF(req, res) {
    fetch(`${rootURL}${token}/search.php?f=f`)
        .then(res => res.json())
        .then(cocktailData => {
            res.render('cocktails/show', { cocktailData });
        });
};

function showG(req, res) {
    fetch(`${rootURL}${token}/search.php?f=g`)
        .then(res => res.json())
        .then(cocktailData => {
            res.render('cocktails/show', { cocktailData });
        });
};

function showH(req, res) {
    fetch(`${rootURL}${token}/search.php?f=h`)
        .then(res => res.json())
        .then(cocktailData => {
            res.render('cocktails/show', { cocktailData });
        });
};

function showI(req, res) {
    fetch(`${rootURL}${token}/search.php?f=i`)
        .then(res => res.json())
        .then(cocktailData => {
            res.render('cocktails/show', { cocktailData });
        });
};

function showJ(req, res) {
    fetch(`${rootURL}${token}/search.php?f=j`)
        .then(res => res.json())
        .then(cocktailData => {
            res.render('cocktails/show', { cocktailData });
        });
};

function showK(req, res) {
    fetch(`${rootURL}${token}/search.php?f=k`)
        .then(res => res.json())
        .then(cocktailData => {
            res.render('cocktails/show', { cocktailData });
        });
};

function showL(req, res) {
    fetch(`${rootURL}${token}/search.php?f=l`)
        .then(res => res.json())
        .then(cocktailData => {
            res.render('cocktails/show', { cocktailData });
        });
};

function showM(req, res) {
    fetch(`${rootURL}${token}/search.php?f=m`)
        .then(res => res.json())
        .then(cocktailData => {
            res.render('cocktails/show', { cocktailData });
        });
};

function showN(req, res) {
    fetch(`${rootURL}${token}/search.php?f=n`)
        .then(res => res.json())
        .then(cocktailData => {
            res.render('cocktails/show', { cocktailData });
        });
};

function showO(req, res) {
    fetch(`${rootURL}${token}/search.php?f=o`)
        .then(res => res.json())
        .then(cocktailData => {
            res.render('cocktails/show', { cocktailData });
        });
};

function showP(req, res) {
    fetch(`${rootURL}${token}/search.php?f=p`)
        .then(res => res.json())
        .then(cocktailData => {
            res.render('cocktails/show', { cocktailData });
        });
};

function showQ(req, res) {
    fetch(`${rootURL}${token}/search.php?f=q`)
        .then(res => res.json())
        .then(cocktailData => {
            res.render('cocktails/show', { cocktailData });
        });
};

function showR(req, res) {
    fetch(`${rootURL}${token}/search.php?f=r`)
        .then(res => res.json())
        .then(cocktailData => {
            res.render('cocktails/show', { cocktailData });
        });
};

function showS(req, res) {
    fetch(`${rootURL}${token}/search.php?f=s`)
        .then(res => res.json())
        .then(cocktailData => {
            res.render('cocktails/show', { cocktailData });
        });
};

function showT(req, res) {
    fetch(`${rootURL}${token}/search.php?f=t`)
        .then(res => res.json())
        .then(cocktailData => {
            res.render('cocktails/show', { cocktailData });
        });
};

function showU(req, res) {
    let searchData = "U"
    fetch(`${rootURL}${token}/search.php?f=u`)
        .then(res => res.json())
        .then(cocktailData => {
            res.render('cocktails/show', { cocktailData, searchData });
        });
};

function showV(req, res) {
    fetch(`${rootURL}${token}/search.php?f=v`)
        .then(res => res.json())
        .then(cocktailData => {
            res.render('cocktails/show', { cocktailData });
        });
};

function showW(req, res) {
    fetch(`${rootURL}${token}/search.php?f=w`)
        .then(res => res.json())
        .then(cocktailData => {
            res.render('cocktails/show', { cocktailData });
        });
};

function showX(req, res) {
    let searchData = "X"
    fetch(`${rootURL}${token}/search.php?f=x`)
        .then(res => res.json())
        .then(cocktailData => {
            res.render('cocktails/show', { cocktailData, searchData });
        });
};

function showY(req, res) {
    fetch(`${rootURL}${token}/search.php?f=y`)
        .then(res => res.json())
        .then(cocktailData => {
            res.render('cocktails/show', { cocktailData });
        });
};

function showZ(req, res) {
    fetch(`${rootURL}${token}/search.php?f=z`)
        .then(res => res.json())
        .then(cocktailData => {
            res.render('cocktails/show', { cocktailData });
        });
};