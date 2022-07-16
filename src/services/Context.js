import React, { createContext, useContext, useReducer, useState } from 'react'


const Context = createContext()

function ContextApi({ children }) {

    // ====================== Data =====================
    const [inCome, setInCome] = useState(0)
    const [expenses, setExpenses] = useState({ id: 0, amount: 0, detail: '' })
    const [transactions, setTransactions] = useState([])

    return (
        <Context.Provider
            value={{
                inCome, setInCome, expenses, setExpenses,
                transactions, setTransactions
            }}
        >
            {children}
        </Context.Provider>
    )
}
export const useCustomHook = () => (useContext(Context))
export default ContextApi
