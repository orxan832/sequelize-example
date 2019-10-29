const express = require('express');
const router = express.Router();
const db = require('../db');
const User = require('../User');

router.get('/addUser', (req, res) => {
    User.create({ FIRSTNAME: "Baxram", LASTNAME: "Abbasli",  EMAIL: "baxram832@gmail.com", PASSWORD: "123"}).then(orxan => {
        res.send(orxan.FIRSTNAME + ' ' + orxan.LASTNAME);
    });
});

router.get('/', (req, res) => {
    User.findAll().then(users => {res.send(users)});
});

module.exports = router;

