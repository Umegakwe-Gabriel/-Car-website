const express = require("express")
const { getAllCars2, NewCar } = require("../Controller/CarController2")

const CarRoute2 = express.Router()

CarRoute2.route("/AllCars").get(getAllCars2)
CarRoute2.route("/newCar").post(NewCar)

module.exports = CarRoute2