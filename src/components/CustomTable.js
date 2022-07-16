import React, { useState } from 'react'
import { useCustomHook } from '../services/Context'
import { RiDeleteBin5Fill } from 'react-icons/ri';

function CustomTable() {
    const { transactions, setTransactions, setExpenses, expenses } = useCustomHook()
    return (
        <table className='w-[100%] text-left '>
            <tr className='bg-gray-100 border-b '>
                <th className='p-3'>Expenses Detail</th>
                <th className='p-3'>Expenses Amount</th>
                <th className='p-3 text-center'>Action</th>
            </tr>
            <tbody>
                {
                    transactions.map((trans, index) => {
                        return (
                            <tr className='bg-gray-50' key={index}>
                                <td className='p-3 border-l'>{trans.detail}</td>
                                <td className='p-3 border-l'>{trans.amount}</td>
                                <td className='p-3 border-l'>{
                                    <RiDeleteBin5Fill
                                        onClick={() => {
                                            const newTransactions = transactions.filter((tr) => tr.id !== trans.id)
                                            setTransactions(newTransactions)
                                            let expensesData = {
                                                amount: parseInt(expenses.amount) - parseInt(trans.amount),
                                                detail: trans.detail
                                            }
                                            setExpenses(expensesData)
                                        }}
                                        className='text-rose-500 text-2xl ml-24 cursor-pointer' />}
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default CustomTable
