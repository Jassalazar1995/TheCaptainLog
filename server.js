require('dotenv').config()
const Logs = require('./models/log');

const express = require('express');
const app = express();
const PORT = 5000;

const mongoConfig = require('./config')

const methodOverride = require('method-override')

app.use(methodOverride('_method'))


const jsxEngine = require('jsx-view-engine');
app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine());

// Middleware to parse request body
app.use(express.urlencoded({ extended: true }));

// Home route
app.get('/new', (req, res) => {
    res.render('New');
});

// Index route
app.get('/', async (req,res) => {
    try {
        const data = await Logs.find()
        console.log(data)
        res.render('Index', { logs: data} )
    } catch (err) {
        res.status(400).json(err)
    }
})

// Create route
app.post('/submitted', async (req, res) => {
    // Convert checkbox value to boolean
    req.body.Broken = req.body.Broken === 'on' ? false : true;
    console.log(req.body);
    const logs = await Logs.create(req.body)
    res.status(200).json(logs)
    //res.send(req.body); // Send back the received data for testing
});

// Show route
app.get('/:id', async (req,res) =>{
    const data = await Logs.findById(req.params.id)
    res.render('Show', { log: data })
})

// Delete route

app.delete('/:id', async (req,res) => {
    console.log('delete')
    try {
        await Logs.findByIdAndDelete(req.params.id)
        res.redirect('/')
        console.log('deleted')
    } catch (error) {
        
    }
})

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
    mongoConfig()
});
