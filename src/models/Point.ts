import mongoose from 'mongoose';

export interface IPoint extends mongoose.Document {
    type: 'Point';
    coordinates: Array<number>;
}

const pointSchema = new mongoose.Schema({
    type: {
        type: String,
        default: 'Point', // Ensures that the value of type is 'Point'
        enum: 'Point', // Ensures that the value of type can only ever be 'Point'
        required: true
    },
    coordinates: {
        type: [Number],
        required: true
    }
});

export const Point = mongoose.model<IPoint>('Point', pointSchema);