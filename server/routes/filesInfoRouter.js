import express from 'express';
import LoadedFile from '../models/loadedFile.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const author = req.body.userId;
    const filesInfo = await LoadedFile.find({ author });
    return res.json(filesInfo);
  } catch (error) {
    res.send({ message: 'Server error' });
  }
});

export default router;
