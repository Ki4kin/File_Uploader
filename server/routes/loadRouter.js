import express from 'express';
import multer from 'multer';
import path from 'path';
import LoadedFile from '../models/loadedFile.js';
import User from '../models/user.js';

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/files');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

router.post('/', upload.single('file'), async (req, res, next) => {
  try {
    // console.log(req.file);
    const { originalname, filename, size } = req.file;
    const author = await User.findById(req.body.author);
    const newFile = await LoadedFile.create({
      originalname,
      filename,
      size,
      author: author._id,
    });
    return res.status(201).json(newFile);
  } catch (error) {
    console.log(error);
  }
});

export default router;
