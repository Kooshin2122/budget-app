import React from 'react'
import { FaUserAlt } from 'react-icons/fa';

function Header() {
    return (
        <div className='w-[100%] h-fit py-5 sticky top-0 px-20 border-b text-xl uppercase bg-white flex justify-between items-center'>
            <h1>Buget APP</h1>
            <FaUserAlt
                className='text-2xl cursor-pointer' />
        </div>
    )
}

export default Header