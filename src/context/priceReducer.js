import {
    UPDATE_PRICE
} from '../types'

const priceReducer = (state, action) => {
    switch (action.type) {

        case UPDATE_PRICE:
            let localCoins = {}
            let data = { ...action.payload }
            if (Object.keys(state.coins).length === 0) {
                Object.keys(data).forEach(key => {
                    localCoins[key] = {}
                    localCoins[key].CMP = parseFloat(data[key])
                    localCoins[key].LMP = 0
                    localCoins[key].percentChange = 0
                })
            } else {
                localCoins = { ...state.coins }
                Object.keys(data).forEach(key => {
                    if (localCoins[key]) {
                        localCoins[key].percentChange = (((localCoins[key].LMP - parseFloat(data[key])) / localCoins[key].LMP) * 100).toFixed(3)
                        localCoins[key].LMP = localCoins[key].LMP === 0 ? parseFloat(localCoins[key].CMP) : localCoins[key].LMP
                        localCoins[key].CMP = parseFloat(data[key])
                    } else {
                        localCoins[key] = {}
                        localCoins[key].CMP = parseFloat(data[key])
                        localCoins[key].LMP = 0.00
                        localCoins[key].percentChange = 0
                    }
                })
            }
            return {
                ...state,
                coins: { ...localCoins }
            }

        default:
            return {
                ...state
            }
    }
}

export default priceReducer