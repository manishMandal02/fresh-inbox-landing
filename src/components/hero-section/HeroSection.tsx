import Image from 'next/image';
import React, { useState } from 'react';
import { FaChrome, FaPlay, FaCheckCircle } from 'react-icons/fa';
import ModalVideoPlayer from './video-player/ModalVideoPlayer';

const HeroSection = () => {
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  return (
    <div className='px-20 py-20 flex items-center justify-around'>
      {/* left container */}
      <div className='mt-8'>
        {/* title */}
        <h1
          className=' text-[3rem] font-extrabold px-3 rounded
        text-slate-50  bg-gradient-to-br from-emerald-500 to-cyan-600  -rotate-[.2deg]
        '
        >
          Clean Inbox, Total Privacy <br />
        </h1>
        <h2 className='mt-3 text-[3rem] font-extrabold  leading-[3.7rem] text-slate-700  '>
          FreshInbox Delivers Both
        </h2>

        {/* quick features */}
        <h3 className='mt-10 text-slate-600 font-light '>
          <p className='flex items-center mb-1.5'>
            <FaCheckCircle className='fill-emerald-600 font-light mr-1' /> Transform your Gmail experience—say
            goodbye to clutter effortlessly
          </p>

          <p className='flex items-center mb-1.5'>
            <FaCheckCircle className='fill-emerald-600 font-light mr-1 ' /> Unsubscribe & Delete with ease to
            reclaim control of your inbox.{' '}
          </p>
          <p className='flex items-center'>
            <FaCheckCircle className='fill-emerald-600 font-light mr-1.5' /> 100% privacy guaranteed. No data
            leaves your browser ever.
          </p>
        </h3>
        {/* cta */}
        <div className='mt-8 '>
          <a
            href='/'
            target='_blank'
            className='w-52 flex gap-x-2 items-center justify-center font-medium  from-teal-600 to-emerald-500 bg-gradient-to-br text-slate-50 px-4 py-2 rounded-md transition-all duration-300 hover:opacity-90'
          >
            <FaChrome />
            Add to Chrome
          </a>
          <p className='ml-1 mt-1  text-sm font-light text-slate-500'>more browser support coming soon...</p>
        </div>
      </div>

      {/* left container */}

      {/* demo video */}
      <div className='relative select-none mt-8 -mr-16 rounded-md z-20 2xl:w-[600px] w-[520px] 2xl:h-[340px] h-[300px] '>
        <Image
          src={'/images/demo-thumbnail.jpg'}
          alt='hero-video'
          className=' bg-slate-100 rounded-md'
          fill
          loading='eager'
          style={{
            boxShadow: ' rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
          }}
        />

        <div
          className='absolute w-full h-full bg-slate-400 opacity-10 top-0 left-0 rounded-md transition-all peer duration-300 hover:opacity-10 cursor-pointer '
          onClick={() => setIsPlayerOpen(true)}
        ></div>
        <FaPlay className='scale-[3.2] absolute top-1/2 left-1/2 z-20  text-emerald-500/80 cursor-pointer transition-all duration-300 peer-hover:text-emerald-500/90 peer-hover:scale-[3.5]' />
      </div>
      <ModalVideoPlayer isOpen={isPlayerOpen} onClose={() => setIsPlayerOpen(false)} />
    </div>
  );
};

export default HeroSection;
