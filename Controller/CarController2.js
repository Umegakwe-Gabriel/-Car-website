const express = require("express")
const carModel2 = require("../Model/CarModel2")

const getAllCars2 = async (req, res)=>{
    try {
        const Cars = await carModel2.find()
        res.status(200).json({message: "All the Cars", data: Cars})
    } catch (error) {
        res.status(400).json({message: "Couldn't get the cars", error})
    }
}

const NewCar = async()=>{
    try {
        const {name, brand, price, model, color} = req.body;
        const newCar = await carModel2.create({
            name, price, model, brand, color 
        })
        res.status(200).json({message: "Sale of new Car", data: newCar})
    } catch (error) {
        res.status(404).json({message: "Couldn't provide latest Car", error})
    }
}

module.exports = {getAllCars2, NewCar}