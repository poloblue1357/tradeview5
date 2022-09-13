import React, {useState, useEffect} from "react"
// import {StockContext} from "../contexts/ContextProvider"
import Inflation from "./Inflation"
import axios from "axios"

function CPImap() {

    const [INFarray, setINFArray] = useState([])
    useEffect(() => {
        axios.get("https://www.alphavantage.co/query?function=INFLATION&apikey=HOEHM6SOJN8NYJWX" )
            .then(response => {
                // console.log(response.data)
                setINFArray(response.data.data)
            })
    },[])

    // const context = useContext(StockContext)
    const mapInf = INFarray?.map(thing => <Inflation thing={thing} key={thing.date+thing.value}/>)
    
    return (
        <table  style={{borderSpacing: "0", borderCollapse: "collapse", margin: "0 auto"}}>
            <tbody>
                {mapInf}
            </tbody>
        </table>
    )
}

export default CPImap