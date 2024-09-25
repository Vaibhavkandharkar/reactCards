import React from 'react'

const Background = () => {
  return (
    <div className='w-full relative h-screen bg-zinc-800'>
           <div className='absolute top-[5%] w-full py-10 flex justify-center text-zinc-600  text-xl font-semibold'></div>
           <h1 className='text-[13vw] top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-semibold leading-none absolute tracking-tighter'>Docs</h1>
    </div>
  )
}

export default Background