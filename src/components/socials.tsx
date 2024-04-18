import React from 'react';
import { linkData } from './linksCards';
import Link from 'next/link';

interface Items {
  id: number
  url: string;
  image: React.ReactNode
}

export function Socials() {
  return (
    <div className='flex items-center gap-5 justify-center'>
      {linkData.socials.map((social: Items) => (
        <Link href={social.url} key={social.id} target='_blank' >
          {social.image}
        </Link>
      ))}
    </div>
  );
}
