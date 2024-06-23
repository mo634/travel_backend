import mongoose from 'mongoose';


const pdfSchema = new mongoose.Schema({
    pdfName: { type: String, required: true },
    pdfUrl: { type: String, required: true },
    cloudinary_id: { type: String, required: true }
}, { timestamps: true });

const Pdf = mongoose.model('Pdf', pdfSchema);

export default Pdf;
