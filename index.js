const express = require('express');
const app = express();
const PORT = 8080;
const { dbConnection } = require('./config/config');
const routes = require('./routes');
app.use(express.json());
const docs = require('./docs/index.js');
const swaggerUI =require ('swagger-ui-express')



app.use('/', routes);


dbConnection();


app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(docs));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));