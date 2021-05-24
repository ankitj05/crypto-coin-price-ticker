import React, { useEffect, useContext } from 'react'
import PriceContext from '../context/priceContext'

function GetPrices() {

    let pricesWS

    const priceContext = useContext(PriceContext)
    const { updatePrice, coins } = priceContext

    const connectWS = () => {
        pricesWS = new WebSocket('wss://ws.coincap.io/prices?assets=ALL')

        pricesWS.onmessage = function (msg) {
            let response = JSON.parse(msg.data)
            updatePrice(response)
        }

        pricesWS.onclose = () => connectWS()
    }

    const disconnectWS = () => {
        pricesWS.close()
    }

    useEffect(() => {
        connectWS()
        return () => {
            disconnectWS()
        }
    }, [])

    return (
        <div className="allCoins">
            {Object.keys(priceContext.coins).map(key => (
                <div className="card" key={key}>
                    <h3 className="coin">{key}</h3>
                    <h3 className="price">$ {coins[key].CMP}</h3>
                    <h3 className={"price " + (coins[key].percentChange > 0 ? `green` : `red`)}>{Math.abs(coins[key].percentChange)} %</h3>
                </div>
            ))}
        </div>
    )
}

export default GetPrices
