import mongoose from 'mongoose';

const russainLanguageLevel1Schema = new mongoose.Schema({
    pdfName: { type: String, required: true },
    pdfUrl: { type: String, required: true },
    cloudinary_id: { type: String, required: true }
}, { timestamps: true });

const RussainLanguageLevel1 = mongoose.model('RussainLanguageLevel1', russainLanguageLevel1Schema);

export default RussainLanguageLevel1;
