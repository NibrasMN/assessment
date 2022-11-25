const service = require('../service/login.service');
const router = require('express').Router();

router.get('/form/:username/:password', service.login);
module.exports = router;