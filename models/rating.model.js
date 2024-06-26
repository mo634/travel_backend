import mongoose from 'mongoose';

const ratingSchema = new mongoose.Schema({
    rating: { type: String, required: true }
}, { timestamps: true });

const Rating = mongoose.model('Rating', ratingSchema);

export default Rating;
