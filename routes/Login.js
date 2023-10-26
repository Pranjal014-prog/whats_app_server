import express from 'express';
import multer from 'multer';
import LoginSchema from '../models/LoginSchema.js'; // Import your MongoDB model
import { promises as fs } from 'fs';
import path from 'path';
import mime from 'mime';
const Image = express.Router();
// Set up storage and file name
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads'); // Destination folder for uploaded images
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '_' + file.originalname);
  },
});

const upload = multer({ storage: storage });
 
Image.post('/register', upload.single('image'), async (req, res) => {
    const PATH = path.resolve('./uploads'); // Set the correct path
    const detectedMimeType = mime.getType(req.file.path);
    const obj = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        img: {
            data: await fs.readFile(path.join(PATH, req.file.filename)),
            contentType: detectedMimeType
        }
    }
    try {
        const savedImages = new LoginSchema(obj);
        await savedImages.save();
        return res.status(200).json({ message: 'Images uploaded and associated with the group', savedImages });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Server error' });
    }
});

export default Image;
