const mongoose2 = require("mongoose")

const carSchema2 = mongoose2.Schema({
    name: {
        type: String
    },
    color: {
        type: String
    },
    brand: {
        type: String
    },
    year: {
        type: String
    },
    price: {
        type: String
    },
}, {timestamps: true})

const carModel2 = mongoose2.model("carParts", carSchema2)

module.exports = carModel2
