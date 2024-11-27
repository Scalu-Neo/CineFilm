import express from 'express';
import cineFilmRouter from './routes/cineFilmRouter';
import connectDB from './config/dataBase';

const app = express();
connectDB();

app.use(express.json());

app.use('/api', cineFilmRouter); 

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
