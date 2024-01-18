const express = require('express');
const app = express();
const PORT = 5000;

const jsxEngine = require('jsx-view-engine');
app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine());

// Middleware to parse request body
app.use(express.urlencoded({ extended: true }));

// Home route
app.get('/', (req, res) => {
    res.render('New');
});

// Create route
app.post('/submitted', (req, res) => {
    // Convert checkbox value to boolean
    req.body.Broken = req.body.Broken === 'on' ? false : true;
    console.log(req.body);
    res.send(req.body); // Send back the received data for testing
});

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
