import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import ourServicesRoutes from './routes/our-services.routes.js';
import imageRoutes from "./routes/who-we-are.routes.js"
import documentRoutes from "./routes/required-documents.routes.js"

const app = express();
const port = 3000;
dotenv.config();

// Middleware
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded



// MongoDB connection
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

// routing
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// our-services routes
app.use('/services', ourServicesRoutes);

// who-we-are routes
app.use('/who-we-are', imageRoutes);

// required-documents routes
app.use('/documents', documentRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
