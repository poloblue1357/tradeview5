import React, { useEffect, useState} from "react"
// import {StockContext} from "../contexts/ContextProvider"
import CPI from "./CPI"
import axios from "axios"

function CPImap() {

    const [CPIarray, setCPIArray] = useState([])
    useEffect(() => {
        axios.get("https://www.alphavantage.co/query?function=CPI&interval=monthly&apikey=HOEHM6SOJN8NYJWX" )
            .then(response => {
                console.log(response.data)
                setCPIArray(response.data.data)
            })
    }, [])

    // const context = useContext(StockContext)
    const mapCPI = CPIarray?.map(item => <CPI item={item} key={item.date+item.value}/>)

    return (
        <table  style={{borderSpacing: "0", borderCollapse: "collapse", margin: "0 auto"}}>
            <tbody>
                {mapCPI}
            </tbody>
        </table>
    )
}

export default CPImap