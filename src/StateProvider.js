import React from 'react'

const StateContext = React.createContext()
const StateProvider = ({ reducer, initState, children }) => (
    <StateContext.Provider value={ React.useReducer(reducer, initState) }>
        { children }
    </StateContext.Provider>
)
const useStateValue = () => React.useContext(StateContext)
export { StateContext, StateProvider, useStateValue }