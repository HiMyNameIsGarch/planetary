import express from 'express';
import path from 'path';
const app = express();
const port = 3000;
const __dirname = path.resolve(path.dirname(''));

app.use(express.static('public'));
app.use(express.json());

app.get('/', function (_req, res) {
    res.sendFile(path.join(__dirname, '/home.html'));
});

app.get('/universe', function (_req, res) {
    res.sendFile(path.join(__dirname, '/univers.html'));
});

app.get('/planet', function (_req, res) {
    res.sendFile(path.join(__dirname, '/planeta.html'));
});

app.get('/random', function (_req, res) {
    res.sendFile(path.join(__dirname, '/planeta.html'));
});

app.get('/contribute', function (_req, res) {
    res.sendFile(path.join(__dirname, '/contribute.html'));
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
