require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const port = process.env.PORT || 7007;

const secret = process.env.SECRET || "lotion peroxide charger book"

// middlware

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "client", "build")));

// connect to database
// mongoose.connect("mongodb://localhost:27017/stockviewdb",
//     {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useCreateIndex: true,
//         useFindAndModify: false
//     },
//         () => console.log("Connected to the database.")
// ) 
// testing updates
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use("/watchlist", require("./routes/stockRouter.js"))

// app.use((err, req, res, next) => {
//     console.log(err)
//     return res.send({errMsg: err.message})
// })
app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "UnauthorizedError") {
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => {
    console.log("The stockview server is running on Port 7007.")
})