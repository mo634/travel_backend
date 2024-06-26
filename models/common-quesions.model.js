import mongoose from 'mongoose';

const { Schema } = mongoose;

// Define the schema for our services
const commonQuesions = new Schema({
    quesion: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    }
});

// Create the model from the schema
const CommonQuesions = mongoose.model('commonQuesions', commonQuesions);

export default CommonQuesions;