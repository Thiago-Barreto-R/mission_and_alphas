import React from 'react'
import { Links } from './links'
import { Socials } from './socials'
import Image from 'next/image'
import { linkData } from './linksCards'

export function Card() {
  return (
    <div className='border-2 border-zinc-800 w-96 mt-6 flex flex-col justify-center items-center gap-3 py-4 rounded-md'>
      <Image 
        className='bg-red-500 rounded-full'
        src={linkData.avatar}
        width={150}
        height={150}
        alt="Logo do missão dada"
      />
      <h1 className='text-xl'>{linkData.name}</h1>
      <p className='text-stone-500'>{linkData.legenda}</p>
      <Links/>
      <div>
        <Socials/>
      </div>
    </div>
  )
}
