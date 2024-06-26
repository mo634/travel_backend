import RussinaBook from '../models/russinaBook.model.js'; // Adjust the path as necessary
import { cloudinary, storage } from '../config/cloudinary.js';

// No need to use Multer since we're not handling file uploads in this route

const uploadPdf = async (req, res) => {
    try {
        const { pdfName, pdfUrl } = req.body;

        // Upload the PDF from the provided URL to Cloudinary
        const result = await cloudinary.uploader.upload(pdfUrl, {
            resource_type: 'raw', // 'raw' is used for non-image files like PDFs
            folder: 'pdfs',
        });

        const pdf = new RussinaBook({
            pdfName: pdfName,
            pdfUrl: result.secure_url,
            cloudinary_id: result.public_id // Save the Cloudinary public ID
        });

        await pdf.save();
        res.status(201).json(pdf);
    } catch (error) {
        console.error("Error uploading file:", error);
        res.status(500).json({ error: error.message });
    }
};

const updatePdf = async (req, res) => {
    try {
        const { pdfName, pdfUrl } = req.body;

        const pdf = await RussinaBook.findById(req.params.id);
        if (!pdf) {
            return res.status(404).json({ error: 'PDF not found' });
        }

        if (pdfUrl) {
            // Delete the old PDF from Cloudinary
            await cloudinary.uploader.destroy(pdf.cloudinary_id, {
                resource_type: 'raw',
            });

            // Upload the new PDF from the provided URL to Cloudinary
            const result = await cloudinary.uploader.upload(pdfUrl, {
                resource_type: 'raw',
                folder: 'pdfs',
            });

            // Update the PDF document in the database
            pdf.pdfUrl = result.secure_url;
            pdf.cloudinary_id = result.public_id; // Save the new Cloudinary public ID
        }

        pdf.pdfName = pdfName || pdf.pdfName;
        await pdf.save();

        res.status(200).json(pdf);
    } catch (error) {
        console.error("Error updating file:", error);
        res.status(400).json({ error: error.message });
    }
};

const deletePdf = async (req, res) => {
    try {
        const pdf = await RussinaBook.findById(req.params.id);
        if (!pdf) {
            return res.status(404).json({ error: 'PDF not found' });
        }

        // Delete the file from Cloudinary
        await cloudinary.uploader.destroy(pdf.cloudinary_id, {
            resource_type: 'raw',
        });

        // Delete the PDF document from the database
        await RussinaBook.findByIdAndDelete(req.params.id);

        res.status(200).json({ message: 'PDF deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getPdf = async (req, res) => {
    try {
        const pdfs = await RussinaBook.find();
        res.status(200).json(pdfs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export { uploadPdf, updatePdf, deletePdf, getPdf };