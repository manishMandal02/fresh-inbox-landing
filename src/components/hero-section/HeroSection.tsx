import Image from 'next/image';
import React, { useState } from 'react';
import { FaChrome, FaPlay, FaCheckCircle } from 'react-icons/fa';
import ModalVideoPlayer from './video-player/ModalVideoPlayer';

const HeroSection = () => {
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  return (
    <div className='px-20 py-20 flex items-center justify-between '>
      {/* title */}
      <div className='mt-8'>
        <h1
          className=' text-[3rem] font-extrabold px-3 rounded
        text-slate-50  bg-gradient-to-br from-emerald-500 to-cyan-600  -rotate-[.2deg]
        '
        >
          Clean Inbox, Total Privacy <br />
        </h1>
        <h2 className='mt-2 text-[3rem] font-extrabold  leading-[3.7rem] text-slate-700  '>
          FreshInbox Delivers Both
        </h2>
        {/* caption */}
        <h3 className='mt-3 text-slate-600 text-base leading-7 '>
          <p className='flex items-center '>
            <FaCheckCircle className='fill-emerald-600 mr-1' /> Transform your Gmail experience—say goodbye to
            clutter effortlessly
          </p>

          <p className='flex items-center mb-px'>
            <FaCheckCircle className='fill-emerald-600 mr-1 ' /> Unsubscribe & Delete with ease to reclaim
            control of your inbox.{' '}
          </p>
          <p className='flex items-center'>
            <FaCheckCircle className='fill-emerald-600 mr-1' /> 100% privacy guaranteed.
          </p>
        </h3>
        {/* cta */}
        <div className='mt-6 '>
          <a
            href='https://chromewebstore.google.com/'
            target='_blank'
            className='w-52 flex gap-x-2 items-center justify-center font-medium  from-teal-600 to-emerald-500 bg-gradient-to-br text-slate-50 px-4 py-2 rounded-md transition-all duration-300 hover:opacity-90'
          >
            <FaChrome />
            Add to Chrome
          </a>
          <p className='mt-1  text-sm font-light text-slate-600'>more browser support coming soon...</p>
        </div>
      </div>

      {/* demo video */}
      <div className='relative select-none mt-10 -mr-10 rounded-md z-20 '>
        <Image
          src={'/demo-thumbnail.webp'}
          alt='hero-video'
          width={550}
          height={400}
          className=' bg-slate-100 rounded-md opacity-100   transition-all duration-300 '
          style={{
            boxShadow: ' rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
          }}
        />
        <div
          className='absolute w-full h-full bg-slate-200 opacity-20 top-0 left-0 rounded-md transition-all peer duration-300 hover:opacity-10 cursor-pointer '
          onClick={() => setIsPlayerOpen(true)}
        ></div>
        <FaPlay className='scale-[3] absolute top-1/2 left-1/2 z-20  text-emerald-500/80 cursor-pointer transition-all duration-300 peer-hover:text-emerald-500/90 peer-hover:scale-[3.2]' />
      </div>
      <ModalVideoPlayer isOpen={isPlayerOpen} onClose={() => setIsPlayerOpen(false)} />
    </div>
  );
};

export default HeroSection;
