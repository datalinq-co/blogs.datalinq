import React from "react";
import { graphql } from "gatsby";
import PageHeader from "../containers/PageHeader"
import PageSection from "../containers/PageSection"

export const query = graphql`
query($slug: String!){
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        author
        authorFb
        authorImg
        authorIn
        authorTweet
        date
        description
        image
        title
      }
    }
}
`
export default function BlogTemplate({ data }) {
    const post = data.markdownRemark.frontmatter
    return (
        <>
            <div className='mb-10'>
                <div className='flex justify-center'>
                    <div className='max-w-4xl my-0 mx-8 min-w-0 w-full'>
                        <article>
                            <PageHeader author={post.author} authorImg={post.authorImg} date={post.date} />
                            <PageSection title={post.title} image={post.image} description={post.description} />
                            <div className='text-xl mt-4' style={{fontFamily: 'fell, Georgia, Cambria, "Times New Roman", Times, serif', color: 'rgba(41,41,41,1)'}} dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}/>
                        </article>
                    </div>
                </div>
            </div>
        </>
    )
}