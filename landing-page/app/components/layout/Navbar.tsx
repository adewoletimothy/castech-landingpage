

import React from 'react'

export default function Navbar () {
  return (
    <div className='flex items-center justify-between mb-6'>
        <div>
            <p className='text-sm text-gray-500'>
                Pages/Dashboard
            </p>
            <h2 className='text-xl font-semibold text-gray-800'>
                Dashboard
            </h2>
        </div>
        <div className='flex items-center ap-4'>
            <input 
                type="text" 
                placeholder='search...'
                className='hidden md:block bg-white border border-gray-200 rounded-lg px-4 py-2 
                            text-sm focus:outline-none focus:ring-2 focus:ring-teal-500'
            />
            <button className='text-sm text-gray-600 hover:text-gray-900'>
                Sign in
            </button>
            <div className='w-8 h-8 bg-gray-200 rounded-full'/>
            <div className='w-8 h-8 bg-gray-200 rounded-full'/>

        </div>  

    </div>
  )
}
