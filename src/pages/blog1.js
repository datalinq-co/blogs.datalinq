import React from 'react'
import PageHeader from '../containers/PageHeader'
import PageSection from '../containers/PageSection'

function blog1() {
    return (
        <>
            {/* <Navbar/> */}
            <div className='mb-10'>
                <div className='flex justify-center'>
                    <div className='max-w-4xl my-0 mx-8 min-w-0 w-full'>
                        <article>
                            <PageHeader/>
                            <PageSection/>
                        </article>
                    </div>
                </div>
            </div>
        </>
    )
}

export default blog1
