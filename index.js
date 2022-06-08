import express from 'express';
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());

app.get('/', function (_req, res) {
    res.render('home');
});

function getDbPlanets() {
    return [
        {
            link: '/planet',
            img: 'https://w.wallhaven.cc/full/eo/wallhaven-eo3m7k.jpg',
            alt: 'my planet',
            title: 'my planet',
            content:
                'this is some kind of textthis is some kind of textthis is some kind of textthis is some kind of textthis is some kind of text',
        },
        {
            link: '/planet',
            img: 'https://w.wallhaven.cc/full/eo/wallhaven-eo3m7k.jpg',
            alt: 'my planet',
            title: 'my planet',
            content:
                'this is some kind of textthis is some kind of textthis is some kind of textthis is some kind of textthis is some kind of text',
        },
    ];
}

app.get('/universe', function (_req, res) {
    const planets = getDbPlanets();
    res.render('universe', { planets: planets });
});

function getPlanet(id) {
    return {
        id: id,
        img: 'https://w.wallhaven.cc/full/eo/wallhaven-eo3m7k.jpg',
        name: 'Earth',
        description: 'this is the description',
        color: 'color',
        type: 'type',
        material: 'material',
        solarSystem: 'solar system',
        canSustainEarthLife: 'yes',
        distanceToEarth: 'distance',
        mass: 'mass',
        gravity: 'gravity',
        acceleration: 'acc',
        density: 'density',
        discoveredOn: 'on',
        discoveredBy: 'by',
        facts: 'facts',
    };
}

app.get('/planet', function (_req, res) {
    const planet = getPlanet(1);
    res.render('planet', { planet: planet });
});

app.get('/random', function (_req, res) {
    res.render('planet');
});

app.get('/contribute', function (_req, res) {
    res.render('contribute');
});

app.post('/search', function (req, res) {
    console.log('This is your search data');
    console.log(req.body);
    res.sendStatus(200);
});
// post data
app.post('/contribute', function (req, res) {
    console.log('This is your planet data');
    console.log(req.body);
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Access planetary server on http://localhost:${port}`);
});
