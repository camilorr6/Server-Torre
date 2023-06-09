const express = require('express');
const router = express.Router();
const bioController = require('../controllers/bioController');

router.get('/basic-info/:username', bioController.getBasicInfo);

module.exports = router;
