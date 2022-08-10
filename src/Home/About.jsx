import React from 'react'
import Title from '../common/Title'
import eu from '../assets/eu.jpg'
import {AiOutlineMail, AiOutlineCloudUpload} from 'react-icons/ai'
import {ImBlogger} from 'react-icons/im'
import {FiFacebook, FiTwitter} from 'react-icons/fi'
import { ButtonBlue, ButtonPink } from '../common/Button'


export default function About() {
    const socialMedias = [
        {name: 'email',
        icon: <AiOutlineMail color="#00D2DF" size={32}/>
        },
        {name: 'facebook',
        icon: <FiFacebook color="#00D2DF" size={32}/>
        },
        {name: 'twitter',
        icon: <FiTwitter color="#00D2DF" size={32}/>
        },
        {name: 'blog',
        icon: <ImBlogger color="#00D2DF" size={32}/>
        }
    ]
  return (
    <div className='flex gap-32  py-8  justify-around items-center'>
        <img src={eu} className="border-l-4 border-blue w-[370px] h-[370px] md:block hidden ml-16"/>
        <div className='flex flex-col gap-8 justify-around md:ml-8 md:w-[50%]'>
            <Title text="SOBRE MIM"/>
            <h3 className='text-white font-semibold text-xl'>Rio de Janeiro, Brasil</h3>
            <p className='text-graylight font-normal md:w-[70%]'>
                Sou um desenvolvedor front-end, apaixonado por todo o processo de desenvolvimento, desde a parte de design e prototipagem das aplicações, até a construção das telas e da lógica por tras delas. Atualmente curso Sistemas de informação na UFF e sou freelancer.
                </p>
            <div className='flex justify-between md:w-[60%] px-8 '>
                {socialMedias.map(item=>{
                    return(
                        <a href="">{item.icon}</a>
                    )
                })}
            </div>
            <div className=' flex gap-8 my-8'>
               <ButtonBlue icon={ <AiOutlineMail size={24}/>} title="Email" link="mailto:gabrielpimenttas@gmail.com"/>
               <ButtonPink icon={ <AiOutlineCloudUpload size={24}/> } title="Curriculo"/>
            </div>
        </div>
    </div>
  )
}
