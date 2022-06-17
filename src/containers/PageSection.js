import React from 'react'


function PageSection({title, description, image}) {
  return (
   <section className='break-words'>
       <h1 className='tracking-tighter text-4xl font-bold mt-3' style={{color: 'rgba(41,41,41,1)'}}>{title}</h1>
       <h2 className='text-xl mt-3 font-normal tracking-normal' style={{ color: 'rgba(117,117,117,1)', fontFamily: 'sohne, "Helvetica Neue", Helvetica, Arial, sans-serif' }}>{description}</h2>
       <figure className='mt-14 mx-auto'>
           <img className='max-w-full w-full h-auto' src={image} alt='Blog Image' />
           <figcaption className='mt-3 max-w-3xl mx-auto text-sm text-center font-normal' style={{color: 'rgba(117,117,117,1)', fontFamily: 'sohne, "Helvetica Neue", Helvetica, Arial, sans-serif' }}>1.1 Figure 1</figcaption>
       </figure>
   </section>
  )
}

export default PageSection
