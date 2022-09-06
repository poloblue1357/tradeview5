import React, {useContext} from "react"
import {StockContext} from "../contexts/ContextProvider"
import Inflation from "./Inflation"

function CPImap() {
    const context = useContext(StockContext)
    const mapInf = context.INFarray.map(thing => <Inflation thing={thing} key={thing.date+thing.value}/>)
    
    return (
        <table  style={{borderSpacing: "0", borderCollapse: "collapse", margin: "0 auto"}}>
            <tbody>
                {mapInf}
            </tbody>
        </table>
    )
}

export default CPImap