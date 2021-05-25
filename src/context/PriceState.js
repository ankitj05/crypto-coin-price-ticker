import React, { useReducer } from 'react'
import PriceContext from './priceContext'
import PriceReducer from './priceReducer'
import {
    UPDATE_PRICE,
} from '../types'

const PriceState = (props) => {

    const initialState = {
        coins: {}
    }

    const [state, dispatch] = useReducer(PriceReducer, initialState)

    const updatePrice = (data) => dispatch({ type: UPDATE_PRICE, payload: data })

    return <PriceContext.Provider
        value={
            {
                coins: state.coins,
                updatePrice: updatePrice
            }
        }>
        {props.children}
    </PriceContext.Provider>
}

export default PriceState
