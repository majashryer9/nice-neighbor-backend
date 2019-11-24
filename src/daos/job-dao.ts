import { connectToDatabase } from '../util/database-util';
import { IJob, Job } from '../models/Job';
import { Error } from 'mongoose';

connectToDatabase();

export const saveJob = (job: IJob) => {
    return new Promise<IJob>((resolve, reject) => {
        Job.create(job, (error: Error, savedJob: IJob) => {
            if (error) {
                reject(error);
            };
            resolve(savedJob);
        });
    });
}