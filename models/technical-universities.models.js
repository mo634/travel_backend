import mongoose from 'mongoose';

const technicalUniversitySchema = new mongoose.Schema({
    pdfName: { type: String, required: true },
    pdfUrl: { type: String, required: true },
    cloudinary_id: { type: String, required: true }
}, { timestamps: true });

const TechnicalUniversity = mongoose.model('TechnicalUniversity', technicalUniversitySchema);

export default TechnicalUniversity;
