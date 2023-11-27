import Image from 'next/image';
import { FaChrome } from 'react-icons/fa';

const HeaderNav = () => {
  return (
    <div className='px-32 py-6 flex justify-between items-center '>
      {/* logo */}
      <div className='flex items-center'>
        <Image src={'/logo-128.png'} alt='logo' width={32} height={32} />
        <span className='text-slate-700 font-semibold ml-1 text-lg'>Fresh Inbox</span>
      </div>

      {/* menu */}
      <ul className='flex gap-x-6'>
        <span className='cursor-pointer transition-all duration-200 hover:opacity-80'>Features</span>
        <span className='cursor-pointer transition-all duration-200 hover:opacity-80'>How it works</span>
        <span className='cursor-pointer transition-all duration-200 hover:opacity-80'>Testimonials</span>
        <span className='cursor-pointer transition-all duration-200 hover:opacity-80'>Faqs</span>
      </ul>

      {/* cta*/}
      <a
        href='https://chromewebstore.google.com/'
        target='_blank'
        className='flex items-center gap-x-1 text-slate-100 from-emerald-500 to-teal-500 bg-gradient-to-br rounded-md text-sm px-3.5 py-1.5 font-medium'
      >
        <FaChrome />
        Chrome Web Store
      </a>
    </div>
  );
};

export default HeaderNav;
