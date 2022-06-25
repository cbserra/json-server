const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;
const express = require('express');
const path = require('path');

server.use(middlewares);
server.use(router);

server.use('/db', middlewares, router);
server.use(express.static(path.join(__dirname, 'public')));

server.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

server.listen(port);