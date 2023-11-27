import HeaderNav from '@/components/header-nav/HeaderNav';
import HeroSection from '@/components/hero-section/HeroSection';

export default function Page() {
  return (
    <main className='h-screen w-screen p-2'>
      <HeaderNav />
      <HeroSection />
    </main>
  );
}
