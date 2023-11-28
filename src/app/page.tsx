'use client';
import FAQs from '@/components/faqs';
import Features from '@/components/features';
import HeaderNav from '@/components/header-nav';
import HeroSection from '@/components/hero-section';
import Testimonials from '@/components/testimonials';
import Image from 'next/image';

export default function Page() {
  return (
    <div className=''>
      {/* blob pattern blue */}
      <div className='absolute w-[1200px] -right-[40%] top-[20%] rotate-[150deg]'>
        <Image
          src='/blob-pattern-blue.svg'
          alt='blob pattern blue'
          className='max-w-full h-full object-cover bg-center opacity-80 z-0'
          width={1000}
          height={1000}
        />
      </div>
      {/* blob pattern orange */}
      <div className='absolute w-[800px] -left-[35%] top-[50%] rotate-[30deg]'>
        <Image
          src='/blob-pattern-orange.svg'
          alt='blob pattern blue'
          className='max-w-full h-full object-cover bg-center opacity-80 z-0'
          width={1000}
          height={1000}
        />
      </div>
      <HeroSection />
      <Features />
      <Testimonials />
      <FAQs />
    </div>
  );
}
