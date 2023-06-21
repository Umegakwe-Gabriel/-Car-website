const express = require("express")
const { getAllCars, newCar } = require("../Controller/CarController")

const router = express.Router()
router.route("/allCars").get(getAllCars)
router.route("/newCar").post(newCar)

module.exports = router