'use client';
import { scrollTo } from '@/utils/scrollTo';
import Image from 'next/image';
import { BsGithub } from 'react-icons/bs';
import { FaChrome } from 'react-icons/fa';

const HeaderNav = () => {
  const handleMenuClick = (menuId: string) => {
    scrollTo(menuId);
  };
  return (
    <div className='px-32  flex justify-between items-center border-b border-slate-200/60 sticky top-0 bg-slate-50 z-[60] h-[10%]'>
      {/* logo */}
      <a href='/' className='flex items-center select-none'>
        <Image src={'/logo-128.png'} alt='logo' width={32} height={32} />
        <span className='text-slate-600 font-medium ml-1 text-xl'>Fresh Inbox</span>
      </a>

      {/* menu */}
      <ul className='flex gap-x-6'>
        <span
          className='cursor-pointer transition-all duration-200 hover:opacity-80 text-slate-700 font-light'
          onClick={() => handleMenuClick('features')}
        >
          Features
        </span>

        <span
          className='cursor-pointer transition-all duration-200 hover:opacity-80 text-slate-700 font-light'
          onClick={() => handleMenuClick('testimonials')}
        >
          Testimonials
        </span>
        <span
          className='cursor-pointer transition-all duration-200 hover:opacity-80 text-slate-700 font-light'
          onClick={() => handleMenuClick('faqs')}
        >
          Faqs
        </span>
      </ul>

      {/* cta*/}
      <ul className='flex gap-x-4'>
        <a
          href='/link/chrome'
          target='_blank'
          className='flex items-center gap-x-1 text-slate-100 from-emerald-500 to-cyan-600 bg-gradient-to-br rounded-full text-sm p-2 font-medium'
        >
          <FaChrome />
        </a>
        <a
          href='/link/github'
          target='_blank'
          className='flex items-center gap-x-1 text-slate-100 from-emerald-500 to-cyan-600 bg-gradient-to-br rounded-full text-sm p-2 font-medium'
        >
          <BsGithub />
        </a>
      </ul>
    </div>
  );
};

export default HeaderNav;
