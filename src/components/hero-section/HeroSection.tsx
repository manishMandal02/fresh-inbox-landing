import Image from 'next/image';
import React, { useState } from 'react';
import { FaChrome, FaPlay } from 'react-icons/fa';
import ModalVideoPlayer from './video-player/ModalVideoPlayer';

const HeroSection = () => {
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  return (
    <div className='px-20 py-20 flex items-center justify-between '>
      {/* title */}
      <div className='-mt-10'>
        <p
          className='text-[3rem] font-extrabold  leading-[3.7rem]
         text-transparent  bg-clip-text bg-gradient-to-tr from-emerald-500 to-teal-600  
        '
        >
          Clean Inbox, Total Privacy <br /> Fresh Inbox Delivers Both
        </p>
        <p className='mt-2 text-slate-500 text-lg leading-7 '>
          Transform your Gmail experience—say goodbye to clutter effortlessly, <br /> Unsubscribe & Delete
          with ease to reclaim control of your inbox.
        </p>
        {/* cta */}
        <div className='mt-4'>
          <a
            href='https://chromewebstore.google.com/'
            target='_blank'
            className='w-52 flex gap-x-2 items-center justify-center font-medium  from-teal-600 to-emerald-500 bg-gradient-to-br text-slate-50 px-4 py-2 rounded-md transition-all duration-300 hover:opacity-90'
          >
            <FaChrome />
            Add to Chrome
          </a>
        </div>
      </div>

      {/* demo video */}
      <div className='relative select-none mt-10 -mr-10 rounded-md z-20 '>
        <Image
          src={'/demo-thumbnail.webp'}
          alt='hero-video'
          width={550}
          height={400}
          className=' bg-slate-100 rounded-md opacity-100 cursor-pointer peer transition-all duration-300 '
          style={{
            boxShadow: ' rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
          }}
          onClick={() => setIsPlayerOpen(true)}
        />
        <div className='absolute w-full h-full bg-slate-500 opacity-20 top-0 left-0 rounded-md '></div>
        <FaPlay className='scale-[3] absolute top-1/2 left-1/2 z-20  text-emerald-500/80 cursor-pointer transition-all duration-300 peer-hover:text-emerald-500/90 peer-hover:scale-[3.2]' />
      </div>
      <ModalVideoPlayer isOpen={isPlayerOpen} onClose={() => setIsPlayerOpen(false)} />
    </div>
  );
};

export default HeroSection;
