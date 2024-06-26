import mongoose from 'mongoose';


const russainUniversity  = new mongoose.Schema({
    pdfName: { type: String, required: true },
    pdfUrl: { type: String, required: true },
    cloudinary_id: { type: String, required: true }
}, { timestamps: true });

const RussainUniversity = mongoose.model('russainUniversity', russainUniversity );

export default RussainUniversity;
