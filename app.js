const express = require('express');

const app = express();

<<<<<<< HEAD
app.post('/app', (req, res) => {
    
})
=======
>>>>>>> 866e5c1c0365c6e34375171e71f15e4bb7d62a68
app.get('/get', (req, res) => {

});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log('Server is listening on port', PORT);
})