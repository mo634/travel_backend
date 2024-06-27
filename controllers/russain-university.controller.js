import RussainUniversity from '../models/russain-university.model.js'; 
// Adjust the path as necessary
import {cloudinary} from '../config/cloudinary.js';
import multer from 'multer';
import fs from 'fs';
import path from 'path';

// Multer config - store files on disk
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

const uploadPdf = async (req, res) => {
    try {
        const filePath = req.file.path;
        const result = await cloudinary.uploader.upload(filePath, {
            resource_type: 'raw', // 'raw' is used for non-image files like PDFs
            folder: 'pdfs',
        });

        // Remove file from local storage
        fs.unlinkSync(filePath);

        const pdf = new RussainUniversity({
            pdfName: req.body.pdfName,
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
        const { pdfName } = req.body;
        const filePath = req.file ? req.file.path : null;

        const pdf = await RussainUniversity.findById(req.params.id);
        if (!pdf) {
            return res.status(404).json({ error: 'PDF not found' });
        }

        if (filePath) {
            // Delete the old PDF from Cloudinary
            await cloudinary.uploader.destroy(pdf.cloudinary_id, {
                resource_type: 'raw',
            });

            // Upload the new PDF to Cloudinary
            const result = await cloudinary.uploader.upload(filePath, {
                resource_type: 'raw',
                folder: 'pdfs',
            });

            // Remove file from local storage
            fs.unlinkSync(filePath);

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
        const pdf = await RussainUniversity.findById(req.params.id);
        if (!pdf) {
            return res.status(404).json({ error: 'PDF not found' });
        }

        // Delete the file from Cloudinary
        await cloudinary.uploader.destroy(pdf.cloudinary_id, {
            resource_type: 'raw',
        });

        // Delete the PDF document from the database
        await RussainUniversity.findByIdAndDelete(req.params.id);

        res.status(200).json({ message: 'PDF deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getPdf = async (req, res) => {
    try {
        const pdf = await RussainUniversity.find();
        if (!pdf) {
            return res.status(404).json({ error: 'PDF not found' });
        }
        res.status(200).json(pdf);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export { upload, uploadPdf, updatePdf, deletePdf, getPdf };
