require('dotenv').config()
const express = require('express');
const cors = require('cors')
const corsOptions = require('./config/corsOptions')
const app = express()
const routes = require('./routes')

app.use(express.json());

const port = process.env.PORT || 8800;
app.use('/api', routes);
app.use(cors(corsOptions));

app.listen(port, () => console.log(`Server is listening at port: ${port}`))