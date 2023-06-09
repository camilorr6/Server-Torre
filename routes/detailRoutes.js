const express = require('express');
const router = express.Router();
const detailController = require('../controllers/detailController');

router.get('/skill-details/:username/:skillId', detailController.getSkillDetails);

module.exports = router;
