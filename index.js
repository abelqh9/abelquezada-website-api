import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { projects, technologiesWithLessExperience, technologiesWithMoreExperience } from './bbdd.js';

const app = express();

app.use(cors());
app.use(express.static('public'));

app.get('/projects', function (req, res) {
    res.status(200).json(projects);
})

app.get('/technologies/mostExperience', function (req, res) {
    res.status(200).json(technologiesWithMoreExperience);
})

app.get('/technologies/lessExperience', function (req, res) {
    res.status(200).json(technologiesWithLessExperience);
})

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`SERVER LISTEN AT PORT ${PORT}`));