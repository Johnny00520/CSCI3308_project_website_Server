// Main starting point of application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const router = require('./router');

// DB Setup

// Dev DB -- Comment out when building production
mongoose.connect('mongodb://nate:maxthedog@ds019836.mlab.com:19836/gds-hdd-db-test');

// Production DB -- Use when deploying production

// App Setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({type: '*/*'}));
router(app);

// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on port', port);
