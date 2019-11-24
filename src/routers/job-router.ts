import Router, { Request, Response } from 'express';
import * as jobService from '../services/job-service';
import { CustomError } from '../models/CustomError';
export const jobRouter = Router();

jobRouter.post('/save', (req: Request, resp: Response) => {
    jobService.saveJob(req.body)
        .then(savedJob => resp.json(savedJob))
        .catch((error: CustomError) => resp.status(error.status).json(error.message));
});

jobRouter.post('/get-jobs-within-radius', (req: Request, resp: Response) => {
    const { centerLong, centerLat, radiusInMiles } = req.body;
    jobService.getJobsWithinGivenRadius(centerLong, centerLat, radiusInMiles)
        .then(jobsWithinGivenRadius => resp.json(jobsWithinGivenRadius))
        .catch((error: CustomError) => resp.status(error.status).json(error.message));
});