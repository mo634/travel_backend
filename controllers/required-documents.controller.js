import RequiredDocument from '../models/required-documents.model.js';

export const createDocument = async (req, res) => {
  try {
    const document = new RequiredDocument(req.body);

    await document.save();
    res.status(201).json(document);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getDocuments = async (req, res) => {
  try {
    const documents = await RequiredDocument.find();
    res.status(200).json(documents);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getDocumentById = async (req, res) => {
  try {
    const document = await RequiredDocument.findById(req.params.id);
    if (!document) {
      return res.status(404).json({ error: 'Document not found' });
    }
    res.status(200).json(document);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateDocument = async (req, res) => {
  try {
    const document = await RequiredDocument.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!document) {
      return res.status(404).json({ error: 'Document not found' });
    }
    res.status(200).json(document);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteDocument = async (req, res) => {
  try {
    const document = await RequiredDocument.findByIdAndDelete(req.params.id);
    if (!document) {
      return res.status(404).json({ error: 'Document not found' });
    }
    res.status(200).json({ message: 'Document deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
