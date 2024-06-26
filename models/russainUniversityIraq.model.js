import mongoose from 'mongoose';

const russainUniversityIraqSchema = new mongoose.Schema({
    pdfName: { type: String, required: true },
    pdfUrl: { type: String, required: true },
    cloudinary_id: { type: String, required: true }
}, { timestamps: true });

const RussainUniversityIraq = mongoose.model('RussainUniversityIraq', russainUniversityIraqSchema);

export default RussainUniversityIraq;
