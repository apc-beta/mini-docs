import React from 'react'

function Background() {
  return (
    <div className='fixed w-full h-screen z-[2]'>
      <div className='absolute top-[5%] py-10 w-full flex justify-center text-zinc-600 text-xl font-semibold'>Documents.</div>
      <h1 className=' absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] tracking-tight leading-none font-semibold text-zinc-900 '> Docs. </h1>
    </div>
  )
}

export default Background