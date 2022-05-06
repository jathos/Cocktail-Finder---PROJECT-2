const express = require('express');
const router = express.Router();

const commentsCtrl = require('../controllers/comments');

router.post('/:id', commentsCtrl.create);
router.delete('/:id', commentsCtrl.deleteComment);
router.get('/:id', commentsCtrl.editPage);
router.put('/:id', commentsCtrl.editComment);

module.exports = router;
