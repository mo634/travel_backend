import Rating from '../models/rating.model.js'; // Adjust the path as necessary

// Create a new rating
export const createRating = async (req, res) => {
    try {
        const { rating } = req.body;
        const newRating = new Rating({ rating });
        await newRating.save();
        res.status(201).json(newRating);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all ratings
export const getAllRatings = async (req, res) => {
    try {
        const ratings = await Rating.find();
        res.status(200).json(ratings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
