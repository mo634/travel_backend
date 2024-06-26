import mongoose from 'mongoose';

const mostImportant100WordSchema = new mongoose.Schema({
    pdfName: { type: String, required: true },
    pdfUrl: { type: String, required: true },
    cloudinary_id: { type: String, required: true }
}, { timestamps: true });

const MostImportant100Word = mongoose.model('MostImportant100Word', mostImportant100WordSchema);

export default MostImportant100Word;
