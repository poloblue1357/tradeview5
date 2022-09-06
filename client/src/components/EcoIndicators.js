import React from "react"
import CPImap from "./CPImap"
import Inflationmap from "./Inflationmap"
import "./EcoIndicators.css"
import TreasuryYieldmap from "./TreasuryYieldmap"

function EcoIndicators() {

    return (
        <div className="EcoIndicators">
            <div className="CPI" style={{margin: "5px"}}>
                <h2 style={{color: "green"}}>Monthly CPI:</h2>
                <CPImap />
            </div>
            <div className="Inflation" style={{margin: "5px"}}>
                <h2 style={{color: "royalblue"}}>Annual Inflation: </h2>
                <Inflationmap />
            </div>
            <div className="TreasuryYield" style={{margin: "5px"}}>
                <h2 style={{color: "saddlebrown"}}>Monthly Treasury Yield: </h2>
                <TreasuryYieldmap />
            </div>
        </div>
    )
}

export default EcoIndicators