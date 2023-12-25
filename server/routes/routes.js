import express from 'express';
import { uploadImg, getImg } from '../controllers/image-controller.js';
import upload from '../utils/upload.js';


const router = express.Router();

router.post('/upload', upload.single('file'), uploadImg);
router.get('/file/:fileId', getImg )


export default router;