const logs = require('../models/logs')
const Log = require('../models/log')

const logIndex = async (req,res) => {
    let data
    try {
        data =await Log.find()
    } catch (err){
        console.log(`data error: ${err}`)
    }
    res.render('Index', { logs: data})
}



const logSeed = async (req,res) => {
    // Delete all data from the collection
    // Add seed data to the database
    console.log('deleting everything from database') 
    await Log.deleteMany()
    await Log.create(logs)
    res.redirect('/submitted')
}

module.exports ={
    logSeed,
    logIndex
}