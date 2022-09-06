import React, {useContext} from "react"
import {StockContext} from "../contexts/ContextProvider"

function TickerSearchmap(props) {

    const context = useContext(StockContext)
    function twoFunctions() {
        return (
            context.addToWatchlist()
        )
    }
    return (
        <div>
            <h1>Stock Search: </h1>
            <form onSubmit={(event) => {
                event.preventDefault()
                context.handleSubmit()    
            }}>
                <input placeholder="Ticker Symbol" type="text" name="ticker" value={context.ticker.ticker} onChange={context.handleChange}/>
                <button type="submit">Search</button>
            </form>
            <h1 style={{color: "red"}}>Company: {context.name}</h1>
            <h1 style={{color: "blue"}}>Ticker Symbol: {context.symbol}</h1>
            <div style={{display: "flex", justifyContent: "space-around", color: "purple"}}>
                <h2>52 Week High: {context.high}</h2>
                <h2>52 Week Low: {context.low}</h2>
                <h2>Fiscal Year End: {context.yearEnd}</h2>
                <h2>Latest Quarter: {context.quarter}</h2>  
            </div>
            <button style={{padding: "10px", fontSize: "16px", backgroundColor: "lightblue"}} onClick={() => twoFunctions()}>Add to Watchlist</button>
            <br />
            <br />
            <table  style={{borderSpacing: "0", borderCollapse: "collapse", margin: "0 auto"}}>
                <tbody>
                    {context.forEachSD}            
                    {context.mapSD}
                </tbody>
            </table>
        </div>
    )
}

export default TickerSearchmap

