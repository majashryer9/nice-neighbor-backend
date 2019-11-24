import { connectToDatabase } from '../util/database-util';
import { IJob, Job } from '../models/Job';
import { Error } from 'mongoose';

connectToDatabase();

export const getJobsWithinGivenRadius = (centerLong: number, centerLat: number, radiusInRadians: number) => {
    const jobsWithinGivenRadius = Job
        .find()
        .where('address.location')
        .within({ center: [centerLong, centerLat], radius: radiusInRadians, unique: true, spherical: true })
        .exec()
        .catch((error: Error) => { throw error });
    return jobsWithinGivenRadius;
}

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