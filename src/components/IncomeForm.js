import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useCustomHook } from '../services/Context'

function IncomeForm() {
    const [inComeValue, setInComeValue] = useState('')
    const { setInCome } = useCustomHook()

    const onChangeHandler = (e) => {
        setInComeValue(e.target.value)
    }

    const addIncome = (e) => {
        e.preventDefault()
        setInCome(inComeValue)
        setInComeValue('')
    }

    return (
        <form
            onSubmit={addIncome}
            className='w-[100%] h-[32vh] p-5 bg-white shadow-md rounded-sm flex flex-col gap-10'>

            <h1 className='font-medium border-b py-2'>
                MONTHLY INCOME
            </h1>

            <TextField
                onChange={onChangeHandler}
                value={inComeValue}
                label="Your Basic Income"
                variant="outlined"
                type='number'
                required
                className='w-[100%] mb-10' />

            <div className='flex justify-end'>
                <Button
                    variant="outlined"
                    size="large"
                    type='submit'
                    className=''>
                    Add Income
                </Button>
            </div>
        </form >
    )
}

export default IncomeForm
