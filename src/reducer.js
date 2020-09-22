export const initState = {
    basket: [],
    user: null
}

function reducer(state, action) {
    switch (action.type) {
        case "ADD_TO_BASKET":
            return { ...state, basket: [...state.basket, action.item] }
            break
        case "REMOVE_FROM_BASKET":
            let  newBasket = [...state.basket]
            const index = state.basket.findIndex(item => item.id === action.id)
            if (index >= 0) {
                newBasket.splice(index, 1)
            } else {
                console.warn(`Can't remove ${action.id}`)
            }
            return { ...state, basket: newBasket }
            break
        default:
             return state
    }
}
export default reducer