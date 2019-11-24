import mongoose from 'mongoose';

const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;
const dbName = process.env.DB_NAME;

export const dbUrl = `mongodb://${dbUsername}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`;

export const connectToDatabase = () => {
    return mongoose.connect(dbUrl, { useNewUrlParser: true, useCreateIndex: true });
}