import React from 'react'
import iurilogo from '../assets/iuricode-logo-footer 1.png' 

export default function Footer() {
  return (
    <div className='flex  justify-between p-16 pb-32'>
        <span className='text-graylight text-sm md:text-base'>@ 2022 - Gabriel Pimenta</span>
        <div className='flex gap-4 md:gap-0'>
            <span className='text-graylight text-sm'>Powered by </span>
        <img src={iurilogo}/></div>
    </div>
  )
}
