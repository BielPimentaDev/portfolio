import React, { useState } from 'react'
import {HiMenuAlt3} from 'react-icons/hi'

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const items = [
    {name: 'Home'},
    {name: 'Sobre nós'},
    {name: 'Experiência'},
    {name: 'Projeto'},
  ]
  return (
    <>
    <header className='fixed  top-0 right-0 w-screen z-10 bg-black-100 flex justify-between md:justify-around p-8 md:p-6 items-center'>
      <h1 className='text-blue font-semibold text-2xl'>Portfolio</h1>
      <nav className='hidden md:block'>
        <ul className='flex gap-4 '>
          {
            items.map(item=>{
              return(
                <li key={item.name} className='text-graylight font-medium cursor-pointer text-lg'>
                  {item.name}
                </li>
              )
            })
          }
        </ul>
      </nav>
        <button className='md:hidden block' onClick={()=> setToggleMenu(!toggleMenu)}><HiMenuAlt3 color='white' size={42}/></button>
    </header>
        {toggleMenu && 
        <div className='fixed top-[80px] w-full h-full z-20 bg-black-200'>
          <ul className='flex flex-col justify-evenly items-center h-[80%] '>
          {
            items.map(item=>{
              return(
                <li key={item.name} className='text-graylight font-medium cursor-pointer text-2xl'>
                  {item.name}
                </li>
              )
            })
          }
        </ul>
        </div>}
          </>
  )
}
