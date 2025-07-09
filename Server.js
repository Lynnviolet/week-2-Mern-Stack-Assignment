const express = require('express');
const dotenv = require('dotenv');
const { logger, errorHandler } = require('./middleware');
const productRoutes = require('./routes/product'); 

dotenv.config();

const app = express();

app.use(logger);
app.use(express.json());

app.get('/', (req, res) => res.send('Hello World'));
app.use('/api/products', productRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

