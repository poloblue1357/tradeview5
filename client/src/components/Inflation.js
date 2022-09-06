import React from "react"

function Inflation(props) {
    const INFvalue = Math.round(props.thing.value * 1000) / 1000

    return (
        <tr>
            <td style={{
                border: "1px solid black", 
                padding: "10px", 
                height: "20px",
                width: "140px", 
                backgroundColor: "lightblue"}}>Date: {props.thing.date}
            </td>
            <td style={{
                border: "1px solid black", 
                padding: "10px", 
                height: "20px",
                width: "110px", 
                backgroundColor: "lightblue"}}>Value: {INFvalue}
            </td>
        </tr>
    )
}

export default Inflation