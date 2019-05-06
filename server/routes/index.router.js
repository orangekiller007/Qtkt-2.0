const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
const ctrlIncident = require('../controllers/incident.controller');


const jwtHelper = require('../config/jwtHelper');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);

router.post('/createincident',ctrlIncident.createincident)
router.get('/home',ctrlIncident.showincident)

router.delete('/home/:id',ctrlIncident.deleteincident);
router.get('/edit/:id',ctrlIncident.editincident);
router.post('/update/:id',ctrlIncident.updateincident);

module.exports = router;



