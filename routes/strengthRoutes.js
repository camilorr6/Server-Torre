const express = require('express');
const router = express.Router();
const strengthController = require('../controllers/strengthController');

router.get('/strengths/:username', strengthController.getStrengths);

module.exports = router;
