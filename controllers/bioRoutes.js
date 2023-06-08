const express = require('express');
const router = express.Router();
const bioController = require('./bioController');

router.get('/basic-info/:username', bioController.getBasicInfo);
router.get('/strengths/:username', bioController.getStrengths);
router.get('/skill-details/:username/:skillId', bioController.getSkillDetails);

module.exports = router;
