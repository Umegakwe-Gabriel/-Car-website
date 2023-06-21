const express = require("express")
require("./Config/database2")
const CarRoute2 = require("./Router/CarRoute2")

const port = 2005;

const app = express()
app.use(express.json())
.use("/", CarRoute2)

app.get("/", (req, res)=>{
res.status(200).json({message: "Server is up and running"})
})


app.listen(port, ()=>{
    console.log(`Server is listening`, port);
})