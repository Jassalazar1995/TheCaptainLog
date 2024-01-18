const express = require('express')
const app = express()
const PORT = 5000

const jsxEngine = require('jsx-view-engine')
app.set('view engine', 'jsx')
app.engine('jsx',jsxEngine())

app.get('/',(req,res) => {
    res.render('New')
})

app.listen(PORT, () => 
{console.log(`Listening on port: ${PORT}`);
})
