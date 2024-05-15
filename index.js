const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


app.use(express.json());


app.get('/', (req, res) => {
    res.send('Welcome to the homepage');
});

app.use(express.static('public'));






app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
