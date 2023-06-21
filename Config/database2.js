const mongoose2 = require("mongoose")

const CDBs = "mongodb://0.0.0.0:27017/CarDatabase"

const Database = async()=>{
try {
    const CarDBs = await mongoose2.connect(CDBs)
    console.log(`Database is connected to ${CarDBs.connection.host}`);
} catch (error) {
    console.log("Couldn't connect to database", error);
}
}

module.exports = Database();