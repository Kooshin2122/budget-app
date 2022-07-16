import React from 'react'

function Cards({ amount = 0, Icon = () => { }, cardName, color, fontSize = "text-6xl" }) {
    return (
        <div className='h-[20vh] bg-white shadow-md p-5'>
            <h1 className={`${color} text-right text-xl font-semibold`}>
                $ {amount}
            </h1>
            <div className='flex flex-col justify-around items-center text-slate-700 uppercase text-sm font-medium h-[10vh]'>
                <Icon className={`${fontSize} ${color}`} />
                {cardName}
            </div>
        </div>
    )
}

export default Cards
