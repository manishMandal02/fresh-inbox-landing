import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

const FAQs = () => {
  return (
    <div className='mt-16 flex flex-col items-center'>
      <span className='text-lg font-light text-green-600 mb-1.5'>Have questions?</span>
      <h2 className='text-3xl font-bold text-slate-700 tracking-wide mb-10'>FAQs</h2>
      <div>
        <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>What harsh truths do you prefer to ignore?</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat
                est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>Is free will real or just an illusion?</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                In ad velit in ex nostrud dolore cupidatat consectetur ea in ut nostrud velit in irure cillum
                tempor laboris sed adipisicing eu esse duis nulla non.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQs;
