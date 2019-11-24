import mongoose from 'mongoose';
import { IPoint, Point } from './Point';

export interface IAddress extends mongoose.Document {
    line1: string;
    line2: string;
    city: string;
    state: string;
    zipCode: string;
    location: IPoint;
}

const addressSchema = new mongoose.Schema<IAddress>({
    line1: {
        type: String,
        required: true
    },
    line2: { type: String },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zipCode: {
        type: String,
        required: true
    },
    location: {
        type: Point.schema,
        required: true
    }
});

addressSchema.index({ location: '2dsphere' });

export const Address = mongoose.model<IAddress>('Address', addressSchema);