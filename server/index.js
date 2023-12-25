import express from 'express';
import cors from 'cors';
import router from './routes/routes.js';
import dbConnection from './database/db.js';
import dotenv from 'dotenv';

const app = express();


app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', router);


const PORT = process.env.PORT || 8000;


dbConnection();
app.listen(PORT, () => {
    console.log(`server is running at port : ${PORT}`)
})