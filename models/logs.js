const mongoose = require('mongoose')

const Schema = mongoose.Schema

const entrySchema = new Schema({
    title:{type:String, required:true},
    entry:{type:String, required:true},
    shipIsBroken:{type:Boolean, require:true, default: true}
},  { timestamps: true })

// First arg is collection name
const log = mongoose.model("posts",entrySchema)
module.exports = log