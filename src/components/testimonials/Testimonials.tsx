import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore from 'swiper';
// import function to register Swiper custom elements
import { Pagination, Autoplay, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/swiper-bundle.css'; // Import Swiper styles

SwiperCore.use([Pagination, Autoplay, A11y]);

import * as React from 'react';

const testimonials = [
  {
    image: 'https://avatars.githubusercontent.com/u/76472450?v=4',
    name: 'Manish Mandal',
    designation: 'Software Engineer',
    testimonial:
      "Fresh Inbox's privacy focused features are great ways to keep your inbox clean with while also keeping your data secure.",
  },
  {
    image: 'https://avatars.githubusercontent.com/u/76472450?v=4',
    name: 'Manish Mandal',
    designation: 'Software Engineer',
    testimonial:
      "Fresh Inbox's privacy focused features are great ways to keep your inbox clean with while also keeping your data secure.",
  },
  {
    image: 'https://avatars.githubusercontent.com/u/76472450?v=4',
    name: 'Manish Mandal',
    designation: 'Software Engineer',
    testimonial:
      "Fresh Inbox's privacy focused features are great ways to keep your inbox clean with while also keeping your data secure.",
  },
  {
    image: 'https://avatars.githubusercontent.com/u/76472450?v=4',
    name: 'Manish Mandal',
    designation: 'Software Engineer',
    testimonial:
      "Fresh Inbox's privacy focused features are great ways to keep your inbox clean with while also keeping your data secure.",
  },
  {
    image: 'https://avatars.githubusercontent.com/u/76472450?v=4',
    name: 'Manish Mandal',
    designation: 'Software Engineer',
    testimonial:
      "Fresh Inbox's privacy focused features are great ways to keep your inbox clean with while also keeping your data secure.",
  },
];

const Testimonials = () => {
  return (
    <div className='mt-28 flex flex-col items-center' id='testimonials'>
      <span className='text-lg font-light text-green-600 mb-2'>What our users are saying?</span>
      <h2 className='text-3xl font-bold text-slate-700 tracking-wide '>Testimonials</h2>
      <div className='w-full flex items-center justify-center relative mt-16'>
        <Swiper
          className={`bg-gray-100 h-80 relative 
          [&>div:nth-child(4)]:absolute [&>div:nth-child(4)]:bottom-1
          svg-background
          `}
          slidesPerView={4}
          autoplay={{
            delay: 3500,
          }}
          pagination={{
            clickable: true,
            enabled: true,
            bulletActiveClass: '!bg-brand-primary !opacity-70',
          }}
          loop
        >
          {testimonials.map(testimonial => (
            <SwiperSlide
              key={testimonial.name}
              className='mt-10 mx-10 !flex flex-col items-center justify-center rounded-md shadow-sm shadow-slate-200 bg-slate-50/90 py-4 px-6 max-h-[70%]'
            >
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={50}
                height={50}
                className='rounded-full border border-slate-300'
              />
              <span className='text-center font-extralight text-xs text-slate-500 mt-1'>
                {testimonial.designation}
              </span>
              <p className='text-sm font-light text-center text-slate-600 mt-3 '>{testimonial.testimonial}</p>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* sun */}
        {/* <div className='absolute rounded-none rounded-t-[6rem] rounded-r-[6rem]  w-[12rem] h-[6rem] bg-amber-300 top-0 right-0 z-50'>
          {' '}
        </div> */}
      </div>
    </div>
  );
};

export default Testimonials;
