import React, {useState, useEffect} from "react"
// import {StockContext} from "../contexts/ContextProvider"
import TreasuryYield from "./TreasuryYield"
import axios from "axios"

function TreasuryYieldmap() {

    const [TYarray, setTYArray] = useState([])
    useEffect(() => {
        axios.get("https://www.alphavantage.co/query?function=TREASURY_YIELD&interval=monthly&maturity=10year&apikey=HOEHM6SOJN8NYJWX" )
            .then(response => {
                // console.log(response.data)
                setTYArray(response.data.data)
            })
    },[])

    // const context = useContext(StockContext)
    const mapTY = TYarray?.map(x => <TreasuryYield x={x} key={x.date+x.value}/>)
    
    return (
        <table  style={{borderSpacing: "0", borderCollapse: "collapse", margin: "0 auto"}}>
            <tbody>
                {mapTY}
            </tbody>
        </table>
    )
}

export default TreasuryYieldmap