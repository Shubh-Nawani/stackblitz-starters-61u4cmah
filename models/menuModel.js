const mongoose = require('mongoose')

const menuSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String
    },
    price: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("Menu", menuSchema)