import express from 'express';
import db from './config/db.js'
import homeRoutes from './routes/home.js';
import blogRoutes from './routes/blog.js';
import cors from 'cors';



try {
    await db.authenticate();
    console.log('Database Connected...');
} catch (error) {
    console.error('Connection Error : ', error);
}


const app = express();
const PORT = 8000;


app.use(cors())
app.use(express.json());

app.use('/blogs', blogRoutes);

app.get('/', homeRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port : ${PORT}`);
})