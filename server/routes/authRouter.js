import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from 'config';
import { check, validationResult } from 'express-validator';
import { authMiddleware } from '../middlewre/authMiddleware.js';
import User from '../models/user.js';
import path from 'path';

const router = express.Router();

router.post(
  '/registration',

  [
    check('email', 'Uncorrect email').isEmail(),
    check('password', 'Пароль должен быть не менее 6 символов').isLength({ min: 3, max: 50 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: 'Incorrect request', errors });
    }
    try {
      const { email, password, name, phone } = req.body;
      const candidate = await User.findOne({ email });
      if (candidate) {
        return res
          .status(201)
          .json({ message: `User with email ${email} already exist` })
          .redirect('/filesInfo');
      }
      const hashPassword = await bcrypt.hash(password, 8);
      const user = await User.create({ email, password: hashPassword, name, phone });
      const token = jwt.sign({ id: user.id }, config.get('secretKey'), { expiresIn: '1h' });
      return res.json({ message: 'OK', user, token });
    } catch (e) {
      res.json({ message: 'Server error' });
    }
  },
);

router.post('/login', async (req, res) => {
  try {
    const { loginEmail, loginPassword } = req.body;
    const user = await User.findOne({ email: loginEmail });
    if (!user) {
      //|| !user.isAuth
      return res.status(404).json({ message: 'Пользователь не найден' });
    }
    const isPassValid = bcrypt.compareSync(loginPassword, user.password);
    if (!isPassValid) {
      return res.status(400).json({ message: 'Не верный пароль' });
    }
    const token = jwt.sign({ id: user.id }, config.get('secretKey'), { expiresIn: '1h' });
    return res.json({
      token,
      user,
    });
  } catch (e) {
    res.send({ message: 'Server error' });
  }
});

router.get('/auth', authMiddleware, async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user.id });
    const token = jwt.sign({ id: user.id }, config.get('secretKey'), { expiresIn: '1h' });
    return res.json({
      token,
      user,
    });
  } catch (e) {
    res.send({ message: 'Server error' });
  }
});

export default router;
