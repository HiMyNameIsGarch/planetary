import express from 'express';
import mongoose from 'mongoose';

import PlanetaryEntity from './planetary.js';

const { isValidObjectId } = mongoose;
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());

const db = new PlanetaryEntity();

app.get('/', function (_req, res) {
    res.render('home');
});

app.get('/universe', async (_req, res) => {
    const planets = await db.getAll();
    res.render('universe', { planets: planets });
});

app.get('/planet/:id', async function (req, res) {
    const id = req.params.id;
    if (!isValidObjectId(id)) return res.sendStatus(404);

    const planet = await db.get(id);
    res.render('planet', { planet: planet });
});

app.get('/random', async (_req, res) => {
    const random = await db.getRandom();
    res.render('planet', { planet: random });
});

app.get('/contribute', (_req, res) => {
    res.render('contribute');
});

app.get('/notfound', (_req, res) => {
    res.render('notfound');
});

// post data
app.post('/search', async (req, res) => {
    const planet = await db.search(req.body.sq);
    if (planet !== null) {
        return res.redirect('/planet/' + planet._id);
    }
    res.sendStatus(404);
});

app.post('/contribute', async (req, res) => {
    const response = await db.add(req.body);
    if (response !== null) {
        return res.status(300).redirect('/planet/' + response);
    } else {
        return res.status(403).send('Cannot add planet!');
    }
});

app.listen(port, async () => {
    console.log(`Access planetary server on http://localhost:${port}`);
    try {
        await db.connect();
    } catch (err) {
        console.log(err);
    }
});
