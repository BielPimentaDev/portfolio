import React from 'react'
import Title from '../common/Title'
import criarte from '../assets/criarte.png'
import auctions from '../assets/auctions_thumb.png'
import pepper8 from '../assets/pepper8.png'
import rachi from '../assets/rachi.png'
import { ButtonBlue } from '../common/Button'
import {FiLink} from 'react-icons/fi'

export default function Projects() {
    const projects = [
        {
            name: "Criarte",
            techs: ["React", "Python", "MySql"],
            picture: criarte,
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum ipsam repellat nesciunt, aliquam autem aut non quaerat neque, dignissimos maiores illum blanditiis nobis odit atque distinctio iure eveniet, qui quam.",
            link: 'https://criarte.netlify.app/'
        },
        {
            name: "Auctions",
            techs: ["React", "Python", "MySql"],
            picture: auctions,
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum ipsam repellat nesciunt, aliquam autem aut non quaerat neque, dignissimos maiores illum blanditiis nobis odit atque distinctio iure eveniet, qui quam.",
            link: 'https://botdeleiloes.netlify.app/'
        },
        {
            name: "Pepper8",
            techs: ["React", "Python", "MySql"],
            picture: pepper8,
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum ipsam repellat nesciunt, aliquam autem aut non quaerat neque, dignissimos maiores illum blanditiis nobis odit atque distinctio iure eveniet, qui quam.",
            link: 'https://pepper8.netlify.app/'
        },
        {
            name: "Rachi",
            techs: ["React", "Python", "MySql"],
            picture: rachi,
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum ipsam repellat nesciunt, aliquam autem aut non quaerat neque, dignissimos maiores illum blanditiis nobis odit atque distinctio iure eveniet, qui quam.",
            link: ''
        },
    ]
  return (
    <div className='my-8 md:px-16'>
        <Title text="PROJETOS"/>
        <div className='grid md:grid-cols-2 gap-y-32 mt-16'>
            {
                projects.map(({name, techs, picture, description, link}) =>{
                    return(

            <div className='flex flex-col justify-around gap-4'>
            <img src={picture} className="md:w-[530px] md:h-[200px]"/>
            <h3 className='text-white font-semibold'>{name}</h3>
            <p className='text-graylight md:w-[70%]'>{description}</p>
            <a href="#" className='text-blue my-4'>{techs.join(` - `)}</a>
            <ButtonBlue icon={<FiLink size={24}/>} title="Visualizar" link={link}/>
            </div>
                    )
                })
            }

           
        </div>
    </div>
  )
}
