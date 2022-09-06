import React, {useContext} from "react"
import {StockContext} from "../contexts/ContextProvider"
import TreasuryYield from "./TreasuryYield"

function TreasuryYieldmap() {
    const context = useContext(StockContext)
    const mapTY = context.TYarray.map(x => <TreasuryYield x={x} key={x.date+x.value}/>)
    
    return (
        <table  style={{borderSpacing: "0", borderCollapse: "collapse", margin: "0 auto"}}>
            <tbody>
                {mapTY}
            </tbody>
        </table>
    )
}

export default TreasuryYieldmap