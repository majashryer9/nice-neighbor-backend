import * as jobDao from '../daos/job-dao';
import { IJob } from '../models/Job';
import { handleError } from '../util/error-util';
import { milesToRadians } from '../util/converters';

export const getJobsWithinGivenRadius = (centerLong: number, centerLat: number, radiusInMiles: number) => {
    return jobDao.getJobsWithinGivenRadius(centerLong, centerLat, milesToRadians(radiusInMiles))
        .catch((error: Error) => { throw handleError(error) });
}

export const saveJob = (job: IJob) => {
    return jobDao.saveJob(job).catch((error: Error) => {
        throw handleError(error);
    });
}