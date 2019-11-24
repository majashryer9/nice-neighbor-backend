import { CustomError } from '../models/CustomError';
import { Error } from 'mongoose';
import { MongoError } from 'mongodb';

const handleMongooseValidationError = (error: Error.ValidationError) => {
    const errorMessage = Object.keys(error.errors).map(key => error.errors[key].message).join(" ");
    return new CustomError(400, errorMessage);
}

const handleMongoError = (error: MongoError) => {
    let errorMessage = 'Mongo error.';
    // TODO: Add more codes
    switch (error.code) {
        case 16755:
            errorMessage = 'Location must include coordinates.';
    }
    return new CustomError(400, errorMessage);
}

export const handleError = (error: Error) => {
    switch (error.name) {
        case 'ValidationError':
            return handleMongooseValidationError(<Error.ValidationError>error);
        case 'MongoError':
            return handleMongoError(error);
        default:
            return new CustomError(500, 'Internal Server Error');
    }
}