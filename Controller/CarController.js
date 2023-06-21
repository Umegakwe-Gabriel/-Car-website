const express = require("express");
const carModel = require("../Model/CarModel")

const getAllCars = async(req,res) =>{
try {
    const Vehicles = await carModel.find()
    res.status(200).json({message: "This are all the cars", data: Vehicles})
} catch (error) {
    res.status(400).json({message: "Couldn't get all cars", error})
}
};

const newCar = async(req, res)=>{
    try {
        const {name, brand, prize, model, color} = req.body
        const publishCar = await carModel.create({
            name, prize,color, brand, model
        })
        res.status(200).json({message: "A new car forSale", data: publishCar})
    } catch (error) {
        res.status(404).json({message: "Couldn't get a car", error})
    }
}

module.exports = {getAllCars, newCar}