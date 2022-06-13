import React from "react";
import { graphql } from "gatsby";
import PageHeader from "../containers/PageHeader"
import PageSection from "../containers/PageSection"

export const query = graphql`
query($slug: String!){
    postsJson(slug: {eq: $slug}) {
        title
        author
        description
        authorImg
        date
        image
    }
}
`
export default function BlogTemplate({ data }) {
    const post = data.postsJson
    return (
        <>
            <div className='mb-10'>
                <div className='flex justify-center'>
                    <div className='max-w-4xl my-0 mx-8 min-w-0 w-full'>
                        <article>
                            <PageHeader author={post.author} authorImg={post.authorImg} date={post.date} />
                            <PageSection title={post.title} image={post.image} description={post.description}/>
                        </article>
                    </div>
                </div>
            </div>
        </>
    )
}