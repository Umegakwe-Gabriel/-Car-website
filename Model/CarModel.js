const mongoose = require("mongoose")

const CarSchema = mongoose.Schema({
    name: {
        type: String
    },
    brand: {
        type: String
    },
    prize: {
        type: Number
    },
    model: {
        type: String
    },
    color: {
        type: String
    },
}, {timestamps: true})

const carModel = mongoose.model("CarParts", CarSchema)

module.exports = carModel