import React, { useState } from 'react'
import { Button, TextField } from '@mui/material'
import { useCustomHook } from '../services/Context'
import { v4 as uuidv4 } from 'uuid';

function ExpenseForm() {
    const [expenseAmount, setexpenseAmount] = useState('')
    const [expenseDetail, setExpenseDetail] = useState('')
    const { transactions, setTransactions, expenses, setExpenses } = useCustomHook()

    const onChangeHandler1 = (e) => {
        setexpenseAmount(e.target.value)
    }

    const onChangeHandler2 = (e) => {
        setExpenseDetail(e.target.value)
    }

    const addExpenses = (e) => {
        e.preventDefault()
        let expensesInfo = { id: uuidv4(), amount: expenseAmount, detail: expenseDetail }
        let expensesData = {
            amount: parseInt(expenses.amount) + parseInt(expensesInfo.amount),
            detail: expensesInfo.detail
        }
        setTransactions([...transactions, expensesInfo])
        setExpenses(expensesData)
        setexpenseAmount('')
        setExpenseDetail('')
    }

    return (
        <form
            onSubmit={addExpenses}
            className='w-[100%] h-[44vh] p-5 bg-white shadow-md rounded-sm flex flex-col gap-10'>
            <h1 className='font-medium border-b py-2'>
                EXPENSES FORM
            </h1>
            <div className='w-[100%] h-[19vh]  flex flex-col gap-y-10 justify-center items-center'>
                <TextField
                    onChange={onChangeHandler1}
                    value={expenseAmount}
                    type='number'
                    required
                    label="Expense Amount"
                    variant="outlined"
                    className='w-[100%] mb-10' />
                <TextField
                    onChange={onChangeHandler2}
                    value={expenseDetail}
                    name='income'
                    label="Expense Detail"
                    variant="outlined"
                    required
                    className='w-[100%] mb-10' />
            </div>
            <div className='flex justify-end'>
                <Button
                    variant="outlined"
                    type='submit'
                    size="large"
                    className='p-3 bg-primary text-xl m-auto'>
                    EXPENSES
                </Button>
            </div>
        </form>
    )
}

export default ExpenseForm
