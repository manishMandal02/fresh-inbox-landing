'use client';
import FAQs from '@/components/faqs/FAQs';
import Features from '@/components/features/Features';
import HeaderNav from '@/components/header-nav';
import HeroSection from '@/components/hero-section/HeroSection';
import Testimonials from '@/components/testimonials/Testimonials';

export default function Page() {
  return (
    <main className='h-screen w-screen p-2 relative overflow-x-hidden'>
      {/* blob pattern blue */}
      <div className='absolute w-[1200px] -right-[40%] top-[20%] rotate-[150deg]'>
        <img
          src='/blob-pattern-blue.svg'
          className='max-w-full h-full object-cover bg-center opacity-80 z-0'
        />
      </div>
      {/* blob pattern orange */}
      <div className='absolute w-[800px] -left-[35%] top-[50%] rotate-[30deg]'>
        <img
          src='/blob-pattern-orange.svg'
          className='max-w-full h-full object-cover bg-center opacity-80 z-0'
        />
      </div>
      <HeaderNav />
      <HeroSection />
      <Features />
      <Testimonials />
      <FAQs />
    </main>
  );
}
