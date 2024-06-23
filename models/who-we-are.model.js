import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
url: { 
    type: String, 
    required: true 
},

cloudinary_id: { 
    type: String, 
    required: true },

}, { timestamps: true });

const Image = mongoose.model('Image', imageSchema);

export default Image;