require('dotenv').config();
const express = require('express');

const  bodyParser = require('body-parser'),
  DEFAULT_BODY_SIZE_LIMIT = 1024 * 1024 * 10,
  DEFAULT_PARAMETER_LIMIT = 10000;

const bodyParserJsonConfig = () => ({
   parameterLimit: DEFAULT_PARAMETER_LIMIT,
   limit: DEFAULT_BODY_SIZE_LIMIT
});

const app = express();
const ask = require('./controller').ask;

app.use(bodyParser.json(bodyParserJsonConfig()));

// the endpoint of the connector
app.post('/ask', ask);

app.listen(3000, () => console.log('Listening on port 3000'));