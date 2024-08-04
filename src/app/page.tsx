'use client';
import FAQs from '@/components/faqs';
import Features from '@/components/features';
import HeroSection from '@/components/hero-section';
import SvgBlob from '@/components/hero-section/svg-blob';
import Testimonials from '@/components/testimonials';

export default function Page() {
  return (
    <div>
      {/* blob patterns*/}
      <SvgBlob color='blue' width={1000} />
      <SvgBlob color='orange' width={1000} />

      <HeroSection />
      <Features />
      <Testimonials />
      <FAQs />
    </div>
  );
}
