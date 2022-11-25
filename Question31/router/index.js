var loginRoutes = require('./login.route');
const router = require('express').Router();

router.use('/login',loginRoutes);
module.exports = router;