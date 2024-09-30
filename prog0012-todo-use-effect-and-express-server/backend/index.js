const express = require('express')
const cors = require("cors")
const app = express()

app.use(cors());

const data = {
    data : [
    {
        "task": "new Task 1",
        "desc" : "new Task 1 desc"
    },
    {
        "task" : "new Task 1",
        "desc" : "new Task 1 desc"
    }
]}

app.get('/',(req,res)=>{
    res.json(data)
})

// app.post()

app.listen(3000)
