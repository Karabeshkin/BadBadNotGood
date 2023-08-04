const router = require('express').Router();

const apiAuthRouter = require('./api/apiAuth.route');
const apiThemeRoute = require('./api/question.route');

router.use('/api/auth', apiAuthRouter);
router.use('/api/theme', apiThemeRoute);
module.exports = router;
