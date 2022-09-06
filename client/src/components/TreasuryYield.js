import React from "react"

function TreasuryYield(props) {
    // const TYvalue = Math.round(props.yield.value * 1000) / 1000
    return (
        <tr>
            <td style={{
                border: "1px solid black", 
                padding: "10px", 
                height: "20px",
                width: "140px", 
                backgroundColor: "burlywood"}}>Date: {props.x.date}
            </td>
            <td style={{
                border: "1px solid black", 
                padding: "10px", 
                height: "20px",
                width: "110px", 
                backgroundColor: "burlywood"}}>Value: {props.x.value}
            </td>
        </tr>
    )
}

export default TreasuryYield