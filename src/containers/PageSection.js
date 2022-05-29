import React from 'react'
import posts from '../../blog_cms/posts.json'

function PageSection() {
  return (
   <section className='break-words'>
       <h1 className='tracking-tighter text-4xl font-bold mt-3' style={{color: 'rgba(41,41,41,1)'}}>{posts.post.at(0).title}</h1>
       <h2 className='text-xl mt-3 font-normal tracking-normal' style={{ color: 'rgba(117,117,117,1)', fontFamily: 'sohne, "Helvetica Neue", Helvetica, Arial, sans-serif' }}>{posts.post.at(0).description}</h2>
       <figure className='mt-14 mx-auto'>
           <img className='max-w-full w-full h-auto' src={posts.post.at(0).image} alt='Blog Image' />
           <figcaption className='mt-3 max-w-3xl mx-auto text-sm text-center font-normal' style={{color: 'rgba(117,117,117,1)', fontFamily: 'sohne, "Helvetica Neue", Helvetica, Arial, sans-serif' }}>1.1 Figure 1</figcaption>
       </figure>
       <p className='text-xl' style={{fontFamily: 'fell, Georgia, Cambria, "Times New Roman", Times, serif', color: 'rgba(41,41,41,1)', marginTop: '2em'}}>When I used to camp in Ontario as a Boy Scout, the night was alive with crickets, and when we were up further north, the occasional howl of a wolf or scream of a fox. When I talk to scientists who have worked in rainforests, they shall talk of the cry of birds, each to each, the chatter of monkeys, and the thrum of insects in the moist air.</p>
       <p className='text-xl' style={{fontFamily: 'fell, Georgia, Cambria, "Times New Roman", Times, serif', color: 'rgba(41,41,41,1)', marginTop: '2em'}}>When I used to camp in Ontario as a Boy Scout, the night was alive with crickets, and when we were up further north, the occasional howl of a wolf or scream of a fox. When I talk to scientists who have worked in rainforests, they shall talk of the cry of birds, each to each, the chatter of monkeys, and the thrum of insects in the moist air.</p>
   </section>
  )
}

export default PageSection
