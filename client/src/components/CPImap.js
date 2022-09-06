import React, {useContext} from "react"
import {StockContext} from "../contexts/ContextProvider"
import CPI from "./CPI"

function CPImap() {
    const context = useContext(StockContext)
    const mapCPI = context.CPIarray.map(item => <CPI item={item} key={item.date+item.value}/>)
    
    return (
        <table  style={{borderSpacing: "0", borderCollapse: "collapse", margin: "0 auto"}}>
            <tbody>
                {mapCPI}
            </tbody>
        </table>
    )
}

export default CPImap