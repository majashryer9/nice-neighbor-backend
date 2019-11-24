import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { jobRouter } from './routers/job-router';

const app = express();

// Temporarily allow all CORS
app.use(cors());
app.use(bodyParser.json());
app.use('/job', jobRouter);

const port = process.env.PORT || 8888;
app.listen(port, () => {
    console.log(`Application is listening on port ${port}`);
});
