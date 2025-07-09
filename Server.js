const express = require('express');
const dotenv = require('dotenv');
const productRoutes = require('./routes/products');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');

dotenv.config();

const app = express();

app.use(logger);      Custom logger middleware
app.use(express.json());   JSON body parser middleware

app.get('/', (req, res) => res.send('Hello World'));

app.use('/api/products', productRoutes);

app.use(errorHandler);          Global error handler

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
