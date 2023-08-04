const router = require('express').Router();

const {Question, Theme} = require('../../db/models');
const {User} = require('../../db/models');

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

router.put('/:id', (req, res) => {
  try {
    const {points} = req.body;
    const {id} = req.params;

    const user = User.findOne({where: {id}});
    user.score = points;
    res.json({score: user.score});
  } catch (error) {
    res.json({message: error.message});
  }
});

module.exports = router;
