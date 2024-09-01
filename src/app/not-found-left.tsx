'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

const NotFoundLeft = (): JSX.Element => {
  const router = useRouter()
  const handleNavigation = (): void => {
    router.push('/')
  }
  return (
    <div className='flex-container'>
      <div className='text-center'>
        <h1 className='text-9xl space-x-8 font-extrabold'>
          <span className='animate-fade-in delay-200'>4</span>
          <span className='animate-fade-in delay-300'>0</span>
          <span className='animate-fade-in delay-500'>4</span>
        </h1>
        <h3 className='border-t border-dotted my-5 pt-2 '>Page not found</h3>
        <button
          className='border-2 px-5 py-2 uppercase hover:text-slate-500 hover:bg-white transition-all duration-300'
          onClick={handleNavigation}
        >
          Return To Home
        </button>
      </div>
    </div>
  )
}

export default NotFoundLeft
