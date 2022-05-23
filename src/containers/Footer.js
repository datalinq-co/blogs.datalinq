import React from 'react'
import site from '../../blog_cms/site.json'

function Footer() {
    return (
        <div className='bg-white'>
            <div className='max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8'>
                <div className='-mx-5 -my-2 flex flex-wrap justify-center'>
                    {/* <div className='px-5 py-2'>
                        <a href='#' className='text-base text-gray-500 hover:text-gray-900'>Career</a>
                    </div>
                    <div className='px-5 py-2'>
                        <a href='#' className='text-base text-gray-500 hover:text-gray-900'>Privacy Policy</a>
                    </div>
                    <div className='px-5 py-2'>
                        <a href='#' className='text-base text-gray-500 hover:text-gray-900'>Imprint</a>
                    </div> */}
                    {
                        site.links.map((ele) => (
                            <div className='px-5 py-2'>
                                <a href={ele.link} className='text-base text-gray-500 hover:text-gray-900'>{ele.text}</a>
                            </div>
                        ))
                    }
                </div>
                <p className='mt-8 text-center text-base text-gray-400'>
                    © 2022 Datalinq.co . All rights reserved.
                </p>
            </div>
        </div>
    )
}

export default Footer
