const express = require('express');
const router = express.Router();

const cocktailsCtrl = require('../controllers/cocktails');

router.get('/', cocktailsCtrl.showAll);

router.get('/a', cocktailsCtrl.showA);
router.get('/b', cocktailsCtrl.showB);
router.get('/c', cocktailsCtrl.showC);
router.get('/d', cocktailsCtrl.showD);
router.get('/e', cocktailsCtrl.showE);
router.get('/f', cocktailsCtrl.showF);
router.get('/g', cocktailsCtrl.showG);
router.get('/h', cocktailsCtrl.showH);
router.get('/i', cocktailsCtrl.showI);
router.get('/j', cocktailsCtrl.showJ);
router.get('/k', cocktailsCtrl.showK);
router.get('/l', cocktailsCtrl.showL);
router.get('/m', cocktailsCtrl.showM);
router.get('/n', cocktailsCtrl.showN);
router.get('/o', cocktailsCtrl.showO);
router.get('/p', cocktailsCtrl.showP);
router.get('/q', cocktailsCtrl.showQ);
router.get('/r', cocktailsCtrl.showR);
router.get('/s', cocktailsCtrl.showS);
router.get('/t', cocktailsCtrl.showT);
router.get('/u', cocktailsCtrl.showU);
router.get('/v', cocktailsCtrl.showV);
router.get('/w', cocktailsCtrl.showW);
router.get('/x', cocktailsCtrl.showX);
router.get('/y', cocktailsCtrl.showY);
router.get('/z', cocktailsCtrl.showZ);

module.exports = router;