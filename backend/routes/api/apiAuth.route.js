const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

// ? регистрация пользователя
router.post('/reg', async (req, res) => {
  try {
    const { login, password, email } = req.body;
    if (login && password && email) {
      let user = await User.findOne({ where: { login } });
      if (!user) {
        const hashPassword = await bcrypt.hash(password, 6); //! хэширование пароля
        user = await User.create({
          login,
          email,
          password: hashPassword,
        });
        req.session.userId = user.id;
        res.json({ message: 'ok' });
      } else {
        res.json({ message: 'Такой пользователь уже существует' });
      }
    } else {
      res.json({ message: 'Заполните все поля' });
    }
  } catch (error) {
    res.json({ messageError: error.message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email && password) {
      const user = await User.findOne({ where: { email } });

      const pass = await bcrypt.compare(password, user.password);
      if (user.email === email && pass) {
        req.session.userId = user.id;
        res.json({ message: 'ok' });
      } else {
        res.json({ message: 'Вы ввели не верные данные' });
      }
    }
  } catch (error) {
    res.json({ message: 'Вам нужно пройти регистрацию' });
  }
});

router.get('/logout', (req, res) => {
  // удаление сессии на сервере
  req.session.destroy((error) => {
    if (error) {
      return res.status(500).json({ message: 'Ошибка при удалении сессии' });
    }

    res
      .clearCookie('user_sid') // серверное удаление куки по имени
      .json({ message: 'Успешный выход' });
  });
});

router.get('/verification', async (req, res) => {
  try {
    const { userId } = req.session;
    if (userId) {
      const user = await User.findOne({
        where: { id: userId },
        attributes: { exclude: ['password', 'createdAt', 'updatedAt'] },

      });
      res.status(201).json(user);
    } else {
      res.status(403).json({ message: 'не в сети' });
    }
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

module.exports = router;
