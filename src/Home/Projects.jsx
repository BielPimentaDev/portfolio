import React from 'react'
import Title from '../common/Title'
import criarte from '../assets/criarte.png'
import auctions from '../assets/auctions_thumb.png'
import pepper8 from '../assets/pepper8.png'
import rachi from '../assets/rachi.png'
import foodip from '../assets/foodip.png'
import { ButtonBlue } from '../common/Button'
import {FiLink} from 'react-icons/fi'

export default function Projects() {
    const projects = [
        {
            name: "Criarte",
            techs: ["React", "Python", "MySql"],
            picture: criarte,
            description: "Desenvolvimento de uma plataforma que organiza e gerencia os pedidos de uma empresa com base na demanda dos clientes.",
            link: 'https://criarte.netlify.app/'
        },
        {
            name: "Auctions",
            techs: ["React", "Python", "MySql"],
            picture: auctions,
            description: "Este aplicativo varre os maiores sites de leilões do Brasil e retorna as informações mais relevantes sobre cada leilão.",
            link: 'https://botdeleiloes.netlify.app/'
        },
        {
            name: "Pepper8",
            techs: ["React", "Java Script"],
            picture: pepper8,
            description: "Uma página para uma empresa de freelances.",
            link: 'https://pepper8.netlify.app/'
        },
        {
            name: "Rachi",
            techs: ["React", "Java Script"],
            picture: rachi,
            description: "Uma pagina para uma empresa fictícia.",
            link: 'https://rachi-example.netlify.app'
        },
        {
            name: "Foodip",
            techs: ["React", "Java Script"],
            picture: foodip,
            description: "Uma pagina para uma empresa do ramo de alimentação. ",
            link: 'https://food-example-app.netlify.app'
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
