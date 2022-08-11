import React from 'react'
import Title from '../common/Title'
import banner from '../assets/banner.png'

import {ButtonBlue,ButtonPink} from '../common/Button'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'

export default function Homepage() {
  return (
    <div className='flex pt-36 pb-16  bg-black-100 justify-between   items-center'>
        
        <div>
            <Title text="OLÁ, EU SOU"/>
            <h2 className='text-blue font-semibold lg:text-4xl text-3xl uppercase my-4'>Gabriel Pimenta</h2>
            <Title text="UM DESENVOLVEDOR FRONT-END"/>

            <div className='flex gap-8 mt-8 justify-center items-center'>
                <ButtonBlue icon={<FaGithub color="white" size={24}/>} title="Github" link="https://github.com/BielPimentaDev"/>
                <ButtonPink icon={<FaLinkedinIn color="white" size={24}/>} title="Linkedin" link="https://www.linkedin.com/in/gabriel-alves-pimenta-a2a944163/"/>
            </div>
        </div>
        <img src={banner} className='hidden lg:block'/>
    </div>
  )
}
