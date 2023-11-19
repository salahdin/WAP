const express = require('express');

const productRouter = require('./routes/product-router');
const app = express();

app.use('/products', productRouter)

app.listen(3000);