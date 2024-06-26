import mongoose from 'mongoose';

const ourStudentsSchema = new mongoose.Schema({
    youtubeLink: { type: String, required: true },
}, { timestamps: true });

const OurStudents = mongoose.model('OurStudents', ourStudentsSchema);

export default OurStudents;
