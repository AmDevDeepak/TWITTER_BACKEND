const express = require('express');
const connect = require('./config/database');
const app = express();

app.listen(3000, async () => {
    console.log('Server listening on port');
    await connect();
});

