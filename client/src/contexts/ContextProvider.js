import React, { useState, useEffect } from "react"
import axios from "axios"
import TickerSearch from "../components/TickerSearch.js"

const StockContext = React.createContext()

const StockContextProvider = (props) => {

    const [stockData, setStockData] = useState({})
    const [companyName, setCompanyName] = useState({})
    const [companyInfo, setCompanyInfo] = useState([])
    const [isLoadingSD, setIsLoadingSD] = useState(false)
    const [isLoadingCN, setIsLoadingCN] = useState(false)
    const [isLoadingCI, setIsLoadingCI] = useState(false)

    const [ticker, setTicker] = useState({ticker: ''})
    // let slice = JSON.stringify(ticker).slice(11, -2)

    const handleChange = (event) => {
        const {name, value} = event.target
        setTicker(prevInput => ({...prevInput,  [ name ]: value}))
    }
    const handleSubmit = (event) => {
        tickerData()
        coName()
        coInfo()
    }

    const tickerData = () => {
        return (
            axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker.ticker}&apikey=HOEHM6SOJN8NYJWX` )
                .then(response => {
                    // console.log("time series daily")
                    console.log(response.data)
                    const data = response.data["Time Series (Daily)"]
                    setStockData(data)
                    setIsLoadingSD(true)
                    // console.log(data)
                    // const tSymbol = response.data["Meta Data"]
                    // setTickerOnly(tSymbol)
            })
        )
    }
    const coName = () => {
        return (
            axios.get(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${ticker.ticker}&apikey=HOEHM6SOJN8NYJWX` )
                .then(response => {
                    console.log(response.data)
                    setCompanyName(response.data)
                    setIsLoadingCN(true)
                    // console.log("Company Name is finished")
            })
        )
    }
    const coInfo = () => {
        return (
            axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker.ticker}&apikey=HOEHM6SOJN8NYJWX` )
                .then(response => {
                    console.log(response.data)
                    setCompanyInfo(response.data)
                    setIsLoadingCI(true)
                    // console.log("Company Info is finished")
                    // addToWatchlist()
            })
        )
    }
    const [CPIarray, setCPIArray] = useState([])
    useEffect(() => {
        axios.get("https://www.alphavantage.co/query?function=CPI&interval=monthly&apikey=HOEHM6SOJN8NYJWX" )
            .then(response => {
                // console.log(response.data)
                setCPIArray(response.data.data)
            })
    }, [])
    const [INFarray, setINFArray] = useState([])
    useEffect(() => {
        axios.get("https://www.alphavantage.co/query?function=INFLATION&apikey=HOEHM6SOJN8NYJWX" )
            .then(response => {
                // console.log(response.data)
                setINFArray(response.data.data)
            })
    },[])
    const [TYarray, setTYArray] = useState([])
    useEffect(() => {
        axios.get("https://www.alphavantage.co/query?function=TREASURY_YIELD&interval=monthly&maturity=10year&apikey=HOEHM6SOJN8NYJWX" )
            .then(response => {
                // console.log(response.data)
                setTYArray(response.data.data)
            })
    },[])
    const [watchlist, setWatchlist] = useState([])
    useEffect(() => {
        axios.get("/watchlist")
            .then(response => {
                console.log(response.data)
                setWatchlist(response.data)
            })
    }, [])

    const [addTicker, setAddTicker] = useState([])
    function addToWatchlist() {
        axios.post("/watchlist", companyInfo)
            .then(res => setAddTicker(prevTicker => [...prevTicker, res.data]))
            // .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    // }axios.post("/api/stocks")
    // symbol: currState["Global Quote"]["01. symbol"],\
    // open: currState["Global Quote"]["02. open"]
    // price: anotherState["Time Series (Daily)"]["2021-11-03"]["2. high"]

    // axios.post("/api/stocks", {
    //     symbol: currState["Global Quote"]["01. symbol"],
    //     open: currState["Global Quote"]["02. open"],
    //     price: anotherState["Time Series (Daily)"]["2021-11-03"]["2. high"]
    // })

    const [tickersForWatchlist, setTickersForWatchlist] = useState([])
    useEffect(() => {
        axios.get("/watchlist")
            .then(res => setTickersForWatchlist(res.data))
            .catch(err => console.log(err))
    }, [addTicker])
    // console.log(tickersForWatchlist) // this gives meta data = ticker symbol info
    const deleteStockFromWatchlist = (stockId) => {
        axios.delete(`http://localhost:7007/watchlist/${stockId}`)
            .then(res => {
                let filterWatchlist = tickersForWatchlist.filter(stock => stock._id !== stockId)
                setTickersForWatchlist(filterWatchlist)
            })
            .catch(err => console.log(err))
    }
    // const [tickerOnly, setTickerOnly] = useState([])
    // const addTickerOnly = () => {
    //     axios.post("/watchlist", stockData)
    //         .then(res => setTickerOnly(prevTicker => [...prevTicker, res.data]))
    //         .catch(err => console.log(err))
    // }
    // console.log(stockData)
    // console.log(tickerOnly)

    const sdArray = []
    // const ciArray = []
    const forEachSD = (isLoadingSD && Object?.entries(stockData).forEach(([key, val]) => {
        return (
            sdArray.push([key, val])
        )
    }))
    // {ticker: ""}
    // { symbol: "MSFT"}
    
    const mapSD = (isLoadingSD && sdArray?.map((x, index) => <TickerSearch x={x} key={index}/>))

    // const forEachCI = (isLoadingCI && Object?.entries(companyInfo).forEach(([key, val]) => {
    //     return (
    //         ciArray.push([key, val])
    //     )
    // }))
    // const mapCI = (isLoadingCI && ciArray?.map((y, index) => <TickerSearch y={y} key={index}/>))

    const symbol = (isLoadingCN && companyName["Symbol"])
    const name = (isLoadingCN && companyName["Name"])
    const high = companyName["52WeekHigh"]
    const low = companyName["52WeekLow"]
    const yearEnd = companyName["FiscalYearEnd"]
    const quarter = companyName["LatestQuarter"]

    return (
        <StockContext.Provider value = {{
            
            mapSD,
            forEachSD, 
            quarter,
            yearEnd,
            low,
            high,
            name,
            symbol,
            tickerData, 
            stockData,
            coName,
            coInfo,
            isLoadingCI,
            isLoadingSD,
            isLoadingCN,
            handleChange, 
            handleSubmit,
            ticker,
            companyName,
            companyInfo,
 
            addTicker,
            addToWatchlist,
            tickersForWatchlist,
            deleteStockFromWatchlist,
            INFarray,
            CPIarray,
            TYarray,
        }}>
            {props.children}
        </StockContext.Provider>
    )
}

export { StockContext, StockContextProvider }