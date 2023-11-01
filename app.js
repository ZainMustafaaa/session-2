const express = require('express');

const app = express();

app.post('/app', (req, res) => {
    
})
app.get('/get', (req, res) => {

});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log('Server is listening on port', PORT);
})