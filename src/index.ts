import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

// Temporarily allow all CORS
app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Application is listening on port ${port}`);
});
