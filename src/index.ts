import express from 'express';
import { connectDB } from './config/dbConnect';
import dataRoute from './routes/dataRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.get('/ping', (req, res) => {
    res.status(200).send({pong: true});
})
app.use('/', dataRoute);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
})