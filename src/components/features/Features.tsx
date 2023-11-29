import React from 'react';
import { MdBlock, MdDelete, MdSearch, MdSecurity } from 'react-icons/md';

const features = [
  {
    title: 'Unsubscribe',
    Icon: MdBlock,
    color: 'black',
    desc: ' With a single click, bid farewell to newsletters and promotional emails, streamlining your inbox and ensuring that only the content that truly matters remains.',
  },
  {
    title: 'Bulk Delete',
    Icon: MdDelete,
    color: 'red',
    desc: 'Say goodbye to tedious, manual deletions, and effortlessly remove hundreds or thousands of emails from selected senders. ',
  },
  {
    title: 'Advanced Search',
    Icon: MdSearch,
    color: 'blue',
    desc: 'Easily locate specific emails using various filters. Once identified the bulk delete feature can clear out emails in 100s or 1000s.',
  },
  {
    title: 'Privacy & Security',
    Icon: MdSecurity,
    color: 'green',
    desc: 'FreshInbox is developed with a commitment to keeping your data secure. No data ever leaves your browser, ensuring that your sensitive information remains confidential and protected.',
  },
];

const Features = () => {
  return (
    <div className='w-full flex items-center flex-col mt-40'>
      <span className='tracking-wide font-light text-xl mb-1 text-sky-600'>What can it do</span>
      <span className='text-3xl font-bold text-slate-700 text-center'>Know the Features</span>
      <div className='w-full flex px-20 py-8 gap-4 mt-8'>
        {features.map(feature => (
          <div className='flex flex-col items-center w-[25%] ' key={feature.title}>
            <feature.Icon
              className={`scale-[3] fill-white  px-.5 py-0.5 rounded-full  
              ${
                feature.color === 'red'
                  ? `bg-red-600`
                  : feature.color === 'black'
                  ? `bg-slate-800`
                  : feature.color === 'blue'
                  ? `bg-cyan-500`
                  : `bg-brand-primary`
              }
              
              `}
              style={{
                boxShadow: ' rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
              }}
            />
            <span className='text-slate-600 font-medium text-lg mt-6'>{feature.title}</span>
            <span className='flex-wrap font-light text-slate-600 text-center mt-1 text-sm px-2.5'>
              {feature.desc}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
