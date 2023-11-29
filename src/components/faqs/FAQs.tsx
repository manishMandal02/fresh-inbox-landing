import React, { useState } from 'react';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import { IoIosArrowDown } from 'react-icons/io';

const faqs = [
  {
    question: 'What is FreshInbox?',
    answer:
      'FreshInbox is a free Chrome extension designed to streamline your Gmail experience. It provides powerful features such as unsubscribe, bulk delete, and advanced search to help you efficiently manage your inbox.',
  },
  {
    question: 'How can it help me de-clutter my inbox?',
    answer:
      'FreshInbox offers a range of tools to simplify your inbox. You can easily unsubscribe from unwanted emails, bulk delete messages from specific senders, and use advanced search options to organize and manage your emails effectively.',
  },
  {
    question: 'Is FreshInbox secure?',
    answer:
      'Absolutely! FreshInbox operates locally within your browser, and no data is transmitted or stored externally. We prioritize user privacy and ensure that all operations, including browser storage handling, occur securely on your device.',
  },
  {
    question: 'How can I get started with FreshInbox?',
    answer:
      "Getting started with FreshInbox is easy! Simply add the extension to your Chrome browser, go to gmail web app, connect your gmail to FreshInbox and start using it.  There's a video tutorial at the ☝️ top of this page.",
  },
  {
    question: 'Does FreshInbox collect any of my personal information?',
    answer:
      'No, FreshInbox does not collect any personal information from users. Your privacy is crucial, and we adhere to a no-data-collection policy to ensure a completely anonymous user experience.',
  },
  {
    question: 'Can I use it on multiple devices?',
    answer:
      'Yes, FreshInbox is designed to work seamlessly on multiple devices. Your preferences and settings are synced with chrome sync.',
  },
  {
    question: 'Can I use multiple email accounts on the same browser?',
    answer: 'Yes, FreshInbox supports multiple email accounts on the same browser.',
  },
  {
    question: 'How much does FreshInbox cost?',
    answer:
      'FreshInbox is completely free forever to use! We want everyone to have a clutter free inbox experience.',
  },

  {
    question: 'What browsers does you support?',
    answer:
      'Currently, FreshInbox is designed specifically for the Google Chrome browser. Support for additional browsers may be considered in future.',
  },
];

const FAQs = () => {
  const [openFAQsIds, setOpenFAQsIds] = useState(['']);

  const isFAQOpen = (id: number) => {
    return openFAQsIds.includes(id.toString());
  };
  return (
    <div className='mt-10 flex flex-col items-center px-4 py-16' id='faqs'>
      <span className='text-lg font-light text-orange-600 mb-2'>Know more</span>
      <h2 className='text-3xl font-bold text-slate-700 tracking-wide '>Frequently Asked Questions</h2>
      <div className='max-h-full w-[55%] mt-16'>
        <Accordion
          allowMultipleExpanded={true}
          allowZeroExpanded={true}
          className='transition-all duration-300 ease-in-out'
          onChange={(ids: string[]) => {
            setOpenFAQsIds(ids);
          }}
        >
          {faqs.map((faq, idx) => (
            <AccordionItem
              key={idx.toString()}
              uuid={idx.toString()}
              className='border-b border-slate-200/60 '
              dangerouslySetExpanded={isFAQOpen(idx)}
            >
              <AccordionItemHeading>
                <AccordionItemButton className='px-7 py-4  border-collapse select-text outline-emerald-600/75 rounded-md'>
                  <div className='flex items-center relative text-sm'>
                    {/* <span className='font-light text-slate-600 text-sm mr-2'>{idx + 1}. </span> */}
                    <span className='text-base font-medium text-slate-700 tracking-wide'>{faq.question}</span>
                    <IoIosArrowDown
                      className={`text-emerald-600 opacity-70 font-extralight absolute right-2 top-1 scale-[1.35] transition-all duration-500 ease-in-out ${
                        isFAQOpen(idx) ? 'rotate-180' : ''
                      } `}
                    />
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className='pl-8 pr-12 pb-4 transition-all duration-500 ease-in-out'>
                <span className='text-sm tracking-wide leading-[.5rem] text-slate-500'>{faq.answer}</span>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQs;
