import Image from '../models/who-we-are.model.js';
import { cloudinary, storage } from '../config/cloudinary.js';
import multer from 'multer';

const upload = multer({ storage });

const uploadImages = async (req, res) => {
  try {
    const fileUploadPromises = req.files.map(async (file) => {
      const result = await cloudinary.uploader.upload(file.path, {
        folder: 'images',
      });

      const image = new Image({
        url: result.secure_url,
        cloudinary_id: result.public_id,
      });

      await image.save();
      return image;
    });

    const images = await Promise.all(fileUploadPromises);
    res.json(images);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAllImages = async (req, res) => {
  try {
    const images = await Image.find();
    res.json(images);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteImage = async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);
    if (!image) {
      return res.status(404).json({ error: 'Image not found' });
    }
    await cloudinary.uploader.destroy(image.cloudinary_id);

    await Image.findByIdAndDelete(req.params.id);

    res.json({ message: 'Image deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export {
  upload,
  uploadImages,
  getAllImages,
  deleteImage,
};
