import React from 'react';
import Link from 'next/link';
import { linkData } from './linksCards'

interface LinkItem {
  id: number
  title: string;
  url: string;
}

export function Links() {
  return (
    <div className='flex flex-col gap-4'>
      {linkData.links.map((link: LinkItem) => (
        <Link 
          className='border-2 border-zinc-50 w-72 text-center py-2 rounded-md duration-300 hover:bg-zinc-50 hover:text-zinc-950'
          href={link.url} 
          key={link.id} 
          target='_blank'
        >
          <p>
            {link.title}
          </p>
        </Link>
      ))}
    </div>
  );
}