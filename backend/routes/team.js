var express = require('express');
var router = express.Router();

const TeamController = require('../controllers/teamController');
const auth = require('../middleware/auth');


router.post('/criarEquipa', TeamController.createTeam);

module.exports = router;