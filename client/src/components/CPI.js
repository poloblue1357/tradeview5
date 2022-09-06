import React from "react"

function CPI(props) {
    const CPIvalue = Math.round(props.item.value * 100) / 100
    return (
        <tr>
            <td style={{
                border: "1px solid black", 
                padding: "10px", 
                height: "20px",
                width: "140px", 
                backgroundColor: "lightgreen"}}>Date: {props.item.date}
            </td>
            <td style={{
                border: "1px solid black", 
                padding: "10px", 
                height: "20px",
                width: "110px", 
                backgroundColor: "lightgreen"}}>Value: {CPIvalue}
            </td>
        </tr>
    )
}

export default CPI