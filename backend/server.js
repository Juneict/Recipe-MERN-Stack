const express = require('express');
require('dotenv').config();

const morgan = require('morgan');
const app = express();
app.use(morgan('dev'));

const RecipesRoutes = require('./router/recipes');

const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.use('/api/recipes',RecipesRoutes);

app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})