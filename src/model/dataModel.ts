import mongoose from 'mongoose';

const dataSchema = new mongoose.Schema({}, { strict: false });

export const dataModel = mongoose.model('data', dataSchema);