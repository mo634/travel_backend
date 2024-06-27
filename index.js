import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import ourServicesRoutes from './routes/our-services.routes.js';
import imageRoutes from "./routes/who-we-are.routes.js"
import documentRoutes from "./routes/required-documents.routes.js"
import pdfRoutes from "./routes/univerities-prices-pd.routes.js"
import commonQuesions from "./routes/common-quesions.routes.js"
import RussainUniversity from "./routes/russain-university.routes.js"
import TechnicalUniversities from "./routes/technical-universities.routes.js"
import RussainUniversityIraq from "./routes/russainUniversityIraq.routes.js"
import russainLanguageLevel1Routes from "./routes/russainLanguageLevel1.routes.js"
import mostImportant100Word from "./routes/mostImportant100Word.routes.js"
import RussianBook from "./routes/russinaBook.routes.js"
import YoutubeLinks from "./routes/ourStudents.routes.js"
import Ratings from "./routes/rating.routes.js"

const app = express();
const port = 3000;
dotenv.config();


// Middleware
app.use(express.json({ limit: '20mb' })); // for parsing application/json with a larger payload size limit
app.use(express.urlencoded({ limit: '20mb', extended: true })); // for parsing application/x-www-form-urlencoded with a larger payload size limit


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

// pdfs unversities prices routes
app.use('/unversities-prices', pdfRoutes);

// common quesions routes 
app.use("/common-quesions", commonQuesions)

// RussainUniversityEgypt routes 
app.use("/russain-university", RussainUniversity)

// Technical Universities routes 
app.use("/technical-university", TechnicalUniversities)

// Russian Universities Iraq routes 
app.use("/russian-unversity-iraq", RussainUniversityIraq)

// russainLanguageLevel1Routes Iraq routes 

app.use("/russain-language-level1", russainLanguageLevel1Routes)

//mostImportant100Word routes
app.use("/most-important-100word", mostImportant100Word)

//RussianBook routes
app.use("/russian-book", RussianBook)

//youtubeLinks routes
app.use("/youtube-links", YoutubeLinks)

//youtubeLinks routes
app.use("/ratings", Ratings)


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
