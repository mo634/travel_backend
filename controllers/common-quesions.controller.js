import CommonQuesions from '../models/common-quesions.model.js'; // Adjust the path as necessary

// Create a new common question
export const createCommonQuesion = async (req, res) => {
    try {
        const newQuesion = new CommonQuesions(req.body);
        await newQuesion.save();
        res.status(201).json(newQuesion);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all common questions
export const getAllCommonQuesions = async (req, res) => {
    try {
        const quesions = await CommonQuesions.find();
        res.status(200).json(quesions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single common question by ID
export const getCommonQuesionById = async (req, res) => {
    try {
        const quesion = await CommonQuesions.findById(req.params.id);
        if (!quesion) {
            return res.status(404).json({ message: 'Common question not found' });
        }
        res.status(200).json(quesion);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a common question by ID
export const updateCommonQuesionById = async (req, res) => {
    try {
        const quesion = await CommonQuesions.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!quesion) {
            return res.status(404).json({ message: 'Common question not found' });
        }
        res.status(200).json(quesion);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a common question by ID
export const deleteCommonQuesionById = async (req, res) => {
    try {
        const quesion = await CommonQuesions.findByIdAndDelete(req.params.id);
        if (!quesion) {
            return res.status(404).json({ message: 'Common question not found' });
        }
        res.status(200).json({ message: 'Common question deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
