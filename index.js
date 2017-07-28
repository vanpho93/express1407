const express = require('express');
const PhepTinh = require('./PhepTinh');
const app = express();
//Template engine ejs

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('./public'));
//get post put delete
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/hello/:name/:age', (req, res) => {
    const { name, age } = req.params;
    res.send(`Xin chao, toi la ${name}, ${age} tuoi`);
});

app.get('/home', (req, res) => {
    res.send('Homepage');
});

app.get('/tinh/:tenPhepTinh/:soa/:sob', (req, res) => {
    const { tenPhepTinh, soa, sob } = req.params;
    const pt = new PhepTinh(soa, sob, tenPhepTinh);
    res.send(pt.getResultString());
});

app.get('*', (req, res) => {
    res.send('Khong tim thay duong dan');
});

app.listen(3000, () => console.log('Server is running.'));
