import OurStudents from '../models/ourStudents.model.js'; // Adjust the path as necessary

// Create a new YouTube link
export const createLink = async (req, res) => {
    try {
        const { youtubeLink } = req.body;
        const newLink = new OurStudents({ youtubeLink });
        await newLink.save();
        res.status(201).json(newLink);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all YouTube links
export const getAllLinks = async (req, res) => {
    try {
        const links = await OurStudents.find();
        res.status(200).json(links);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a YouTube link by ID
export const updateLinkById = async (req, res) => {
    try {
        const { youtubeLink } = req.body;
        const link = await OurStudents.findByIdAndUpdate(req.params.id, { youtubeLink }, { new: true });
        if (!link) {
            return res.status(404).json({ error: 'Link not found' });
        }
        res.status(200).json(link);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a YouTube link by ID
export const deleteLinkById = async (req, res) => {
    try {
        const link = await OurStudents.findByIdAndDelete(req.params.id);
        if (!link) {
            return res.status(404).json({ error: 'Link not found' });
        }
        res.status(200).json({ message: 'Link deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
