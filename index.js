import express from 'express';
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());

app.get('/', function (_req, res) {
    res.render('home');
});

app.get('/universe', function (_req, res) {
    res.render('universe');
});

app.get('/planet', function (_req, res) {
    res.render('planet');
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
