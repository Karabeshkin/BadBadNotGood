const express = require('express');
const {Question, Theme} = require('../../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const questions = await Theme.findAll({
      include: [
        {
          model: Question,
        },
      ],
    });
    console.log(questions);
    res.json(questions);
  } catch (error) {
    res.json({message: error.message});
  }
});

module.exports = router;
