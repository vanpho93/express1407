const express = require('express');
const PhepTinh = require('./PhepTinh');
const app = express();

//get post put delete
app.get('/', (req, res) => {
    res.send('<h1>AAA</h1>');
});

app.get('/hello/:name/:age', (req, res) => {
    const { name, age } = req.params;
    res.send(`Xin chao, toi la ${name}, ${age} tuoi`);
});

app.get('/home', (req, res) => {
    res.send('Homepage 123');
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
