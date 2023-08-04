const express = require("express");

const router = express.Router();

const { User } = require("../../db/models");

router.put("/:id", (req, res) => {
  try {
    const { points } = req.body;
    const { id } = req.params;

    let user = User.findOne({ where: { id } });
    user.score = points;
    res.json({ user });
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = router;
