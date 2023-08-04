const router = require("express").Router();

const apiAuthRouter = require("./api/apiAuth.route");
const apiPointsScore = require("./api/question.route");

router.use("/api/auth", apiAuthRouter);
router.use("/api/score", apiPointsScore);

module.exports = router;
