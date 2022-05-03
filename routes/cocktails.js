const express = require('express');
const router = express.Router();

const cocktailsCtrl = require('../controllers/cocktails');

router.get('/', cocktailsCtrl.showAll);
router.get('/search', cocktailsCtrl.showSearch);
router.get('/:id', cocktailsCtrl.showOne);

router.get('/search/a', cocktailsCtrl.showA);
router.get('/search/b', cocktailsCtrl.showB);
router.get('/search/c', cocktailsCtrl.showC);
router.get('/search/d', cocktailsCtrl.showD);
router.get('/search/e', cocktailsCtrl.showE);
router.get('/search/f', cocktailsCtrl.showF);
router.get('/search/g', cocktailsCtrl.showG);
router.get('/search/h', cocktailsCtrl.showH);
router.get('/search/i', cocktailsCtrl.showI);
router.get('/search/j', cocktailsCtrl.showJ);
router.get('/search/k', cocktailsCtrl.showK);
router.get('/search/l', cocktailsCtrl.showL);
router.get('/search/m', cocktailsCtrl.showM);
router.get('/search/n', cocktailsCtrl.showN);
router.get('/search/o', cocktailsCtrl.showO);
router.get('/search/p', cocktailsCtrl.showP);
router.get('/search/q', cocktailsCtrl.showQ);
router.get('/search/r', cocktailsCtrl.showR);
router.get('/search/s', cocktailsCtrl.showS);
router.get('/search/t', cocktailsCtrl.showT);
router.get('/search/u', cocktailsCtrl.showU);
router.get('/search/v', cocktailsCtrl.showV);
router.get('/search/w', cocktailsCtrl.showW);
router.get('/search/x', cocktailsCtrl.showX);
router.get('/search/y', cocktailsCtrl.showY);
router.get('/search/z', cocktailsCtrl.showZ);

module.exports = router;