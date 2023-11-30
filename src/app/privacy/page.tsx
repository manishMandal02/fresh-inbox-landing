const page = () => {
  return (
    <main className='px-2070% py-16 flex items-center justify-center w-full'>
      <div className='w-[60%] 2xl:w-[50%]'>
        <h1 className='text-center font-medium text-4xl tracking-wide text-slate-800'>Privacy Policy</h1>
        <p className=' text-slate-500 text-sm text-center w-full -ml-1 mt-3'>Last updated: on Nov 28, 2023</p>

        <hr className='bg-slate-200 w-[60%] mx-auto  h-[1.5px] my-6' />

        <section className='mt-8'>
          <h2 className='text-3xl mb-3 font-normal text-slate-600 '>Information Collection</h2>
          <p className='text-slate-700 font-light'>
            <strong className='text-slate-700 font-medium text-lg '>Local Browser Operations:</strong>{' '}
            FreshInbox exclusively operates within your browser, conducting all operations locally without
            transmitting or storing any data on external servers. All email management tasks, including
            unsubscribe, bulk delete, and advanced search functionalities, are executed directly within your
            browser environment.
          </p>
        </section>

        <section className='mt-10'>
          <h2 className='text-3xl mb-3 font-normal text-slate-600 '>Usage of FreshInbox</h2>
          <p className='text-slate-700 font-light'>
            <strong className='text-slate-700 font-medium text-lg '>Local Browser Storage:</strong> To enhance
            your experience, FreshInbox utilizes local browser storage mechanisms to save preferences and
            settings on your local system. No data is sent or stored externally; everything remains securely
            within your browser&apos;s storage.
          </p>
        </section>

        <section className='mt-10'>
          <h2 className='text-3xl mb-3 font-normal text-slate-600 '>Data Security</h2>
          <p className='text-slate-700 font-light'>
            <strong className='text-slate-700 font-medium text-lg '>Zero External Storage:</strong> FreshInbox
            adheres to a zero-external-storage policy. Your personal information and email data are not stored
            on any external servers. The extension&apos;s design ensures that all operations, including the
            handling of browser storage, occur locally on your device.
          </p>
        </section>

        <section className='mt-10'>
          <h2 className='text-3xl mb-3 font-normal text-slate-600 '>Your Privacy Matters</h2>
          <p className='text-slate-700 font-light'>
            <strong className='text-slate-700 font-medium text-lg '>Localized User Experience:</strong>{' '}
            FreshInbox prioritizes user privacy by minimizing data transfer and storage. Your interaction with
            the extension is confined to your local browser environment, providing a secure and private
            experience without external data dependencies.
          </p>
        </section>

        <section className='mt-10'>
          <h2 className='text-3xl mb-3 font-normal text-slate-600 '>Landing Page Data Collection</h2>
          <p className='text-slate-700 font-light'>
            <strong className='text-slate-700 font-medium text-lg '>No Data Collected:</strong> Our commitment
            to user privacy extends to our landing page. We do not collect any data from visitors to our
            website. Your visit to our landing page remains anonymous, and we do not employ any tracking
            mechanisms.
          </p>
        </section>

        <section className='mt-4'>
          <p className='text-slate-700 font-light underline leading-7'>
            By leveraging local browser operations and storage, FreshInbox maintains a privacy-centric
            approach, ensuring your data remains under your control within your browser environment.
            Additionally, we uphold the same standard of privacy on our landing page, where no user data is
            collected.
          </p>
        </section>
      </div>
    </main>
  );
};

export default page;
