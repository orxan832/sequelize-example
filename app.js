const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

//Database
const db = require('./db');

db.authenticate()
.then(() => console.log('Connection has been established successfully'))
.catch((err) => console.log('Unable to connect to the database:', err));

const app = express();

app.get('/', (req, res) => res.send('INDEX'));

app.use('/users', require('./routes/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));