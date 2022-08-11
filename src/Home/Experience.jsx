import React, { useState } from 'react'
import Title from '../common/Title'

export default function Experience() {
    const [dictionaryKey, setDictionaryKey] = useState('Pepper8')
    const experiences  ={
        Pepper8 : {
        title: 'Pepper8',
        date: 'Julho 2022 - atual',
        description: "Empresa de desenvolvimento de projetos freelancer em que atuo com uma equipe para desenvolver de forma profissional e ágil qualquer ideia.",
        subtitle: 'Empresa Freelancer'
        },
        "Experiência acadêmica" : { 
        title: 'UFF - SISTEMAS DE INFORMACAO',
        date: 'Julho 2022 - atual',
        description: "Estou cursando o curso de Sistemas de Informação na Universidade Federal Fluminense - UFF",
        subtitle: 'Empresa Freelancer'},

        Freelancer : {
        title: 'UFF - SISTEMAS DE INFORMACAO',
        date: 'Abril 2022 - atual',
        description: "Iniciei minha careira profissional atuando como freelancer independente, atuando para conhecidos ou em plataformas como Workana",
        subtitle: 'Empresa Freelancer'
        }
    }
  return (
    <div className='my-32 md:px-16'>
        <Title text="EXPERIENCIA"/>
        <div className='flex my-8  md:gap-48 gap-16 md:flex-row flex-col justify-evenly'>
            <ul className='flex md:flex-col gap-8 mr-4 mb-8 overflow-auto'>
                {
                    Object.keys(experiences).map(key=>{
                        return (
                        <li key={key} onClick={()=> setDictionaryKey(key)} className= {`${ dictionaryKey != key ? 'text-graylight p-4 cursor-pointer w-[400px]': 'text-white md:border-l-2 border-b-2 p-4 border-blue bg-black-200 cursor-pointer w-[400px]' }`} >{key}</li>
                        
                        )
                    })
                }
                
               
            </ul>

        <div className='flex flex-col gap-8 md:w-[40%] mr-48'>

   {
        <>
            <div className='flex items-center justify-between'>
                <h3 className='text-white font-semibold text-xl'>{experiences[dictionaryKey].title}</h3>
                <h3 className='text-white '>{experiences[dictionaryKey].date}</h3>
                
            </div>
            <span className='text-blue'>{experiences[dictionaryKey].subtitle}</span>
            <p className='text-graylight'>{experiences[dictionaryKey].description}</p>
        </>
            
            }

            </div>
        </div>

    </div>
  )
}
