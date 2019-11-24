import * as jobDao from '../daos/job-dao';
import { IJob } from '../models/Job';
import { handleError } from '../util/error-util';

export const saveJob = (job: IJob) => {
    return jobDao.saveJob(job).catch((error: Error) => {
        throw handleError(error);
    });
}