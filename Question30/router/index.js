var routes = require('./hr.route');
const router = require('express').Router();

router.use('/hr',routes)
module.exports = router;