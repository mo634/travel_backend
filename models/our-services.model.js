import mongoose from 'mongoose';

const { Schema } = mongoose;

// Define the schema for our services
const OurServicesSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

// Create the model from the schema
const OurServices = mongoose.model('OurServices', OurServicesSchema);

export default OurServices;