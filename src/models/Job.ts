import mongoose from 'mongoose';
import { IAddress, Address } from './Address';

export interface IJob extends mongoose.Document {
    address: IAddress
}

const jobSchema = new mongoose.Schema({
    address: { type: Address.schema, required: true }
});

export const Job = mongoose.model('Job', jobSchema);