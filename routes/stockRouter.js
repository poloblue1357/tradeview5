const express = require("express")
const stockRouter = express.Router()
const Stock = require("../models/stock.js")

stockRouter.route("/")
    .get((req, res, next) => {
        Stock.find((err, stocks) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(stocks)
        })
    })

stockRouter.route("/")
    .post((req, res, next) => {
        const newStock = new Stock(req.body)
        newStock.save((err, savedStock) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(savedStock)
        })
        console.log(req.body)
    })
stockRouter.delete("/:stockId", (req, res, next) => {
    Stock.findOneAndDelete({_id: req.params.stockId}, (err, deletedStock) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted ${deletedStock.ticker} from the databse.`)
    })
})

module.exports = stockRouter