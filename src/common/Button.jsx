import React from 'react'


export function ButtonPink({icon, title, link}) {
  return (
    <a  href={link} target="_blank" className='cursor-pointer bg-gradient-to-r p-[2px] from-[#D24074] to-[#6518B4] rounded-lg md:max-w-[180px]'>
      <div className='bg-black-100 px-6 py-2 text-white font-ses rounded-lg justify-center'>
      <div className='flex items-center gap-4 font-semibold'>
        {icon}
          {title}
      </div>
        
        </div>
    </a>
  )
}
export function ButtonBlue({icon, title, link}) {
  return (
    <a  href={link} target="_blank" className='cursor-pointer bg-gradient-to-r p-[2px] from-[#9358F7] to-[#10D7E2] rounded-lg md:max-w-[180px]'>
      <div className='bg-black-100 px-6 py-2 text-white font-ses rounded-lg'>
      <div className='flex items-center gap-4 font-semibold justify-center'>
        {icon}
          {title}
      </div>
        
        </div>
    </a>
  )
}
