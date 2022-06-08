import express from 'express';
import PlanetaryEntity from './planetary.js';
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());

const db = new PlanetaryEntity();

app.get('/', function (_req, res) {
    res.render('home');
});

app.get('/universe', function (_req, res) {
    const planets = db.getAll();
    res.render('universe', { planets: planets });
});

app.get('/planet', function (_req, res) {
    const planet = db.get(1);
    res.render('planet', { planet: planet });
});

app.get('/random', function (_req, res) {
    const planet = db.getRandom();
    res.render('planet', { planet: planet });
});

app.get('/contribute', function (_req, res) {
    res.render('contribute');
});

// post data
app.post('/search', function (req, res) {
    const planet = db.search(req.body.sq);
    if (planet !== null) {
        return planet;
    }
    res.sendStatus(404);
});
app.post('/contribute', function (req, res) {
    const response = db.add(req.body);
    if (response) {
        res.status(200).send('Planet added!');
    } else {
        res.status(403).send('Cannot add planet!');
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
