import mongoose from 'mongoose';

const requiredDocumentSchema = new mongoose.Schema({
  requiredPaper: { type: String, required: true }
}, { timestamps: true });

const RequiredDocument = mongoose.model('RequiredDocument', requiredDocumentSchema);

export default RequiredDocument;
