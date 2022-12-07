import React from "react"

function TickerSearch(props) {
    // const INFvalue = Math.round(props.thing.value * 1000) / 1000
    // console.log(props.x)
    // for upload
    return (
          <tr>
            <td style={{
                border: "1px solid black", 
                padding: "10px 0px", 
                height: "30px",
                maxWidth: "160px",
                width: "160px", 
                backgroundColor: "#d9ead3"}}> 
                
                Date: {props?.x[0]}
                
            </td>
            <td style={{
                border: "1px solid black", 
                padding: "10px 0px", 
                height: "30px",
                maxWidth: "160px",
                width: "160px", 
                backgroundColor: "#d9ead3"}}> 
                
                Open: {Math.round(props.x[1]["1. open"])}

            </td>
            <td style={{
                border: "1px solid black", 
                padding: "10px 0px", 
                height: "30px",
                maxWidth: "160px",
                width: "160px", 
                backgroundColor: "#d9ead3"}}> 

                High: {Math.round(props.x[1]["2. high"])}

            </td>
            <td style={{
                border: "1px solid black", 
                padding: "10px 0px", 
                height: "30px",
                maxWidth: "160px",
                width: "160px", 
                backgroundColor: "#d9ead3"}}> 

                Low: {Math.round(props.x[1]["3. low"])}

            </td>
            <td style={{
                border: "1px solid black", 
                padding: "10px 0px", 
                height: "30px",
                maxWidth: "160px",
                width: "160px", 
                backgroundColor: "#d9ead3"}}> 

                Close: {Math.round(props.x[1]["4. close"])}

            </td>
            <td style={{
                border: "1px solid black", 
                padding: "10px 0px", 
                height: "30px",
                maxWidth: "160px",
                width: "160px", 
                backgroundColor: "#d9ead3"}}> 

                Volume: {props.x[1]["6. volume"]}

            </td>
        </tr>
    )
}

export default TickerSearch

