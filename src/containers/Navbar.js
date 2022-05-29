import React, { useState } from 'react'
import site from '../../blog_cms/site.json'

function Navbar() {
    const [searchActive, setSearchActive] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <div id='Navbar' className='fixed w-screen top-0 z-30 bg-white'>
            <div className='relative p-6 sm:p-6 lg:p-8'>
                <div className='relative flex items-center sm:h-10 justify-between'>
                    <div className='flex w-full md:w-auto'>
                        <div className='flex flex-grow flex-shrink-0 items-center lg:flex-grow-0 w-full md:w-auto'>
                            <div className='flex items-center justify-between w-full md:w-auto'>
                                <a href='#'>
                                    <span className="sr-only">Datalinq Blog</span>
                                    <img src={site.logo} alt='Datalinq Blog' className='h-10 w-auto sm:h-12' />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-5 justify-evenly !md:hidden'>
                        <div className='flex items-center'>
                            <button className='cursor-pointer bg-transparent border-0' onClick={() => setSearchActive((searchActive) => !searchActive)}>
                                <img src='/img/search.png' alt='Search' className='w-5 brightness-0' />
                            </button>
                            <input className={`bg-custCol1 text-black rounded-full text-sm h-8 border border-white placeholder-white transition-width duration-500 ${searchActive ? 'ml-2.5 p-2.5 w-52 opacity-100 ' : 'ml-0 p-0 opacity-0 w-0'}`} value={searchTerm} onChange={({ target }) => setSearchTerm(target.value)} placeholder="Search Blogs" />
                        </div>
                        <a href={site.navbarbtnLink} className="flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">{site.navbarbtnLink}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
