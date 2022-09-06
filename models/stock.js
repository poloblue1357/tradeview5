const mongoose = require("mongoose")
const Schema = mongoose.Schema

// stock blueprint Schema

const stockSchema = new Schema({
    'Global Quote': 
    {
        '01. symbol': {
        type: String,
        required: true
        },
        '02. open': {
            type: String,
            required: true
        },
        '05. price': {
            type: String,
            required: true
        },
        '08. previous close': {
            type: String,
            required: true
        },
        '09. change': {
            type: String,
            required: true
        },
        '10. change percent': {
            type: String,
            required: true
        }
    }
})

module.exports = mongoose.model("Stock", stockSchema)