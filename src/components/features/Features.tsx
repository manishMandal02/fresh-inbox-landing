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
    <div className='w-full flex items-center flex-col mt-40' id='features'>
      <span className='tracking-wide font-light text-lg mb-1 text-sky-600'>What can it do</span>
      <span className='text-3xl font-bold text-slate-700 text-center'>Know the Features</span>
      <div className='w-full flex flex-wrap px-20 py-8 mt-6 items-center justify-center ml-20'>
        {features.map(feature => (
          <div className='flex items-center w-[40%] px-10 mt-10' key={feature.title}>
            <feature.Icon
              className={` fill-white scale-[6] h-fit p-[1.5px] -ml-6 -mt-6 rounded-full  
              ${
                feature.color === 'red'
                  ? `bg-red-600 scale-[5] -mt-4`
                  : feature.color === 'black'
                  ? `bg-slate-800`
                  : feature.color === 'blue'
                  ? `bg-cyan-500 scale-[5] -mt-4`
                  : `bg-brand-primary scale-[6.5]`
              }
              
              `}
              style={{
                boxShadow: ' rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
              }}
            />
            <div className='ml-12 flex flex-col items-start justify-start'>
              <span className='text-slate-600 font-medium text-lg'>{feature.title}</span>
              <span className='flex-wrap font-light text-slate-600 mt-px text-sm w-[85%]'>
                {feature.desc}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
