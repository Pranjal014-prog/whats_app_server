import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage"; // Note the uppercase 'G' in GridFsStorage

import dotenv from "dotenv";
dotenv.config();
const MONGO_URL = process.env.MONGODB_URL;

const storage = new GridFsStorage({
    url: MONGO_URL,
    options: { useNewUrlParser: true, useUnifiedTopology: true,writeConcern: { w: 'majority' }, }, // Note the correct 'options' key
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];
        if (match.indexOf(file.mimetype) === -1) { // Note the correct 'mimetype' property
            return `${Date.now()}-file-${file.originalname}`;
        }
        return {
            bucketName: "photos", // Corrected bucketName to "photos"
            filename: `${Date.now()}-file-${file.originalname}`,
        };
    }
});


export default multer({ storage });;
