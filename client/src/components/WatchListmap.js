import React,{useContext} from "react"
import {StockContext} from "../contexts/ContextProvider"
import WatchList from "./WatchList"

function WatchListmap() {
    const context = useContext(StockContext)

    const list = context.tickersForWatchlist.map(stock => <WatchList stock={stock} key={stock._id}/>)

    return (
        <div>
            <h1>Watchlist (most recent information): </h1>
            <table  style={{borderSpacing: "0", borderCollapse: "collapse", margin: "0 auto"}}>
                <tbody>
                    {list}
                </tbody>
            </table>
        </div>
    )
}

export default WatchListmap