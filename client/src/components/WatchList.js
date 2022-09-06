import React, {useContext} from "react"
import {StockContext} from "../contexts/ContextProvider"

function WatchList(props) {
    const context = useContext(StockContext)
    return (
        <tr>
            <td style={{
                border: "1px solid black", 
                padding: "10px 0px", 
                height: "30px",
                maxWidth: "160px",
                width: "160px", 
                backgroundColor: "palevioletred"}}>
                
                Ticker: {props.stock["Global Quote"]["01"][" symbol"]}
                
            </td>
            <td style={{
                border: "1px solid black", 
                padding: "10px 0px", 
                height: "30px",
                maxWidth: "160px",
                width: "160px", 
                backgroundColor: "palevioletred"}}>
                
                Open: {(props.stock["Global Quote"]["02"][" open"]) * 100 / 100}
                
            </td>
            <td style={{
                border: "1px solid black", 
                padding: "10px 0px", 
                height: "30px",
                maxWidth: "160px",
                width: "160px", 
                backgroundColor: "palevioletred"}}>
                
                Close: {(props.stock["Global Quote"]["05"][" price"]) * 100 / 100}
                
            </td>
            <td style={{
                border: "1px solid black", 
                padding: "10px 0px", 
                height: "30px",
                maxWidth: "160px",
                width: "160px", 
                backgroundColor: "palevioletred"}}>
                
                Previous Close: {(props.stock["Global Quote"]["08"][" previous close"]) * 100 / 100}
                
            </td>
            <td style={{
                border: "1px solid black", 
                padding: "10px 0px", 
                height: "30px",
                maxWidth: "160px",
                width: "160px", 
                backgroundColor: "palevioletred"}}>
                
                Change: {(props.stock["Global Quote"]["09"][" change"]) * 1000 / 1000}
                
            </td>
            <td style={{
                border: "1px solid black", 
                padding: "10px 0px", 
                height: "30px",
                maxWidth: "160px",
                width: "160px", 
                backgroundColor: "palevioletred"}}>
                
                Percent Change: {props.stock["Global Quote"]["10"][" change percent"]}</td>
            <td><button style={{padding: "10px", fontSize: "16px", backgroundColor: "lightblue"}} onClick={() => context.deleteStockFromWatchlist(props.stock._id)}>
                
                Delete 
            </button></td>  
        </tr>
    )
}

export default WatchList