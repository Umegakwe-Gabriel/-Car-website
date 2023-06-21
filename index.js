const express = require("express")
require("./Config/database")
const  CarRoute = require("./Router/CarRoute")

const port = 2004;

const app = express()
app.use(express.json())
.use("/", CarRoute)

app.get("/", (req, res)=>{
res.status(200).json({message: "Server is up and running"})
})

app.listen(port, ()=>{
    console.log("server is listening", port);
})