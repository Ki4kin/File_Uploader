import express from 'express';
import LoadedFile from '../models/loadedFile.js';

const router = express.Router();

router.delete('/:id', async (req, res) => {
  try {
    await LoadedFile.findOneAndDelete({ _id: req.params.id });
    return res.status(201);
  } catch (error) {
    res.send({ message: 'Server Error' });
  }
});

export default router;
