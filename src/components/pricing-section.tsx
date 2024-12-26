const IconCheckFill = () => (
  <span className='flex items-center'>
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z'
        fill='#EEF2FF'
      />
      <path
        d='M9.64715 15.5245L10.0007 15.878L10.3543 15.5245L19.1931 6.68562L19.9002 7.39272L10.0007 17.2922L4.34383 11.6354L5.05093 10.9283L9.64715 15.5245Z'
        fill='#6366F1'
        stroke='#6366F1'
      />
    </svg>
  </span>
);

export default function PricingSection() {
  return (
    // `<section>` -> this is the "Content" element in the Figma design, i.e the main container
    <section className='gfe-container'>
      <div className='flex flex-col gap-5 text-center'>
        <div className='flex flex-col gap-3'>
          <span className='text-base font-semibold text-indigo-700'>One time purchase</span>
          <h2 className='text-3xl font-semibold text-neutral-900'>Pay as you need</h2>
        </div>
        <p className='text-lg font-normal text-neutral-600'>
          We offer one-time purchases with credits, for you to use as needed. Always active.
        </p>
      </div>

      <article className='flex flex-col gap-8 lg:flex-row'>
        <div className='flex flex-col gap-8 text-start'>
          <h3 className='text-2xl font-semibold text-neutral-900'>
            Unlock creativity&nbsp;once, enjoy forever
          </h3>
          <ul className='flex flex-col items-start gap-5'>
            <li className='flex flex-row gap-3 align-middle text-lg font-normal text-neutral-600'>
              <IconCheckFill />
              128 available credits for all images
            </li>
            <li className='flex flex-row gap-3 align-middle text-lg font-normal text-neutral-600'>
              <span className='flex gap-3 align-middle'>
                <IconCheckFill />
                Up to 3 users
              </span>
            </li>
            <li className='flex flex-row gap-3 align-middle text-lg font-normal text-neutral-600'>
              <span className='flex gap-3 align-middle'>
                <IconCheckFill />
                24 hour response time
              </span>
            </li>
            <li className='flex flex-row gap-3 align-middle text-lg font-normal text-neutral-600'>
              <span className='flex gap-3 align-middle'>
                <IconCheckFill />
                Advanced analytics
              </span>
            </li>
          </ul>
        </div>

        {/* Card */}
        <div className='flex flex-col gap-8 rounded-lg border border-neutral-200 px-8 py-8 text-center'>
          <div className='flex flex-col gap-2'>
            <span className='w-fit self-center rounded-full bg-green-50 stroke-green-200 px-2 py-1 text-sm text-green-700'>
              Popular
            </span>
            <span className='text-5xl font-semibold text-neutral-900'>$699</span>
            <span className='text-sm text-neutral-600'>Prices in USD</span>
          </div>
          <p className='px-8 text-xl text-neutral-900'>
            Pay once, use it forever. No strings attached.
          </p>
          <button
            className='rounded bg-indigo-700 py-2.5 text-base text-white'
            type='button'
            aria-label='Buy now'
          >
            Buy now
          </button>
        </div>
      </article>
    </section>
  );
}