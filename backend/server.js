const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');

const morgan = require('morgan');
const app = express();
app.use(morgan('dev'));
const mongoUrl = "mongodb+srv://junemoenyinyiict:adminadmin@mern-cluster.e9gb9hh.mongodb.net/?retryWrites=true&w=majority&appName=MERN-Cluster";
mongoose.connect(mongoUrl)
    .then(() => {
        console.log('Connected!');
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })
    });
const RecipesRoutes = require('./router/recipes');

const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.use('/api/recipes', RecipesRoutes);

