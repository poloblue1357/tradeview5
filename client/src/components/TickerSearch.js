import React from "react"

function TickerSearch(props) {
    // const INFvalue = Math.round(props.thing.value * 1000) / 1000
    // console.log(props.x)
    return (
          <tr>
            <td style={{
                border: "1px solid black", 
                padding: "10px 0px", 
                height: "30px",
                maxWidth: "160px",
                width: "160px", 
                backgroundColor: "palevioletred"}}> 
                
                Date: {props?.x[0]}
                
            </td>
            <td style={{
                border: "1px solid black", 
                padding: "10px 0px", 
                height: "30px",
                maxWidth: "160px",
                width: "160px", 
                backgroundColor: "palevioletred"}}> 
                
                Open: {Math.round(props.x[1]["1. open"])}

            </td>
            <td style={{
                border: "1px solid black", 
                padding: "10px 0px", 
                height: "30px",
                maxWidth: "160px",
                width: "160px", 
                backgroundColor: "palevioletred"}}> 

                High: {Math.round(props.x[1]["2. high"])}

            </td>
            <td style={{
                border: "1px solid black", 
                padding: "10px 0px", 
                height: "30px",
                maxWidth: "160px",
                width: "160px", 
                backgroundColor: "palevioletred"}}> 

                Low: {Math.round(props.x[1]["3. low"])}

            </td>
            <td style={{
                border: "1px solid black", 
                padding: "10px 0px", 
                height: "30px",
                maxWidth: "160px",
                width: "160px", 
                backgroundColor: "palevioletred"}}> 

                Close: {Math.round(props.x[1]["4. close"])}

            </td>
            <td style={{
                border: "1px solid black", 
                padding: "10px 0px", 
                height: "30px",
                maxWidth: "160px",
                width: "160px", 
                backgroundColor: "palevioletred"}}> 

                Volume: {props.x[1]["5. volume"]}

            </td>
        </tr>
    )
}

export default TickerSearch