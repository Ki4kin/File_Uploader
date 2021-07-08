import express from 'express';
import LoadedFile from '../models/loadedFile.js';

const router = express.Router();

router.put('/:id', async (req, res) => {
  try {
    const updatedFileName = await LoadedFile.findOneAndUpdate(
      { _id: req.params.id },
      { originalname: req.body.newFileName },
    );
    await res.status(201).json(updatedFileName);
  } catch (error) {
    res.statusMessage('ServerError');
  }
});

export default router;
