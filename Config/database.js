const mongoose = require("mongoose");

const CarDB = "mongodb://0.0.0.0:27017/CarDatabase"

const CDatabase = async()=>{
try {
    const CDB = await mongoose.connect(CarDB)
    console.log(`Database is connected to ${CDB.connection.host}`);
} catch (error) {
    console.log("An error has just occured", error);
}
}

module.exports = CDatabase()