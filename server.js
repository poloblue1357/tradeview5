const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")
const cors = require("cors")

// middlware

app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

// connect to database
mongoose.connect("mongodb://localhost:27017/stockviewdb",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
        () => console.log("Connected to the database.")
)

app.use("/watchlist", require("./routes/stockRouter.js"))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(7007, () => {
    console.log("The stockview server is running on Port 7007.")
})