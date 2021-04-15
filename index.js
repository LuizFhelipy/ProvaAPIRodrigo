const express = require('express');
const router = require('./src/routes/planosaudeRoute');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/', router);

app.listen(process.env.PORT || 8081, () => {
    console.log('Server started');
})