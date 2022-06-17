import React from 'react'
import site from '../../blog_cms/site.json'
import { graphql, Link, useStaticQuery } from "gatsby"

export default function HeroSection() {
  const data = useStaticQuery(graphql`
  query blogQuery {
    allMarkdownRemark {
    nodes {
      frontmatter {
        slug
        title
        description
        author
        authorImg
        authorIn
        date
        image
      }
      id
    }
  }
  }
  `)
  const posts = data.allMarkdownRemark.nodes
  return (
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl !lg:pt-5">{site.title}</h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            {site.subtitle}
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {
            posts.map((ele) => (
              <div key={ele.id} className='flex flex-col rounded-lg shadow-lg overflow-hidden'>
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={ele.frontmatter.image} alt="Cover Picture" />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <a href={`/blog/${ele.frontmatter.slug}`} className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900">{ele.frontmatter.title}</p>
                      <p className="mt-3 text-base text-gray-500">{ele.frontmatter.description}</p>
                    </a>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <a href={ele.frontmatter.authorIn}>
                        <span className="sr-only">{ele.frontmatter.author}</span>
                        <img className="h-10 w-10 rounded-full" src={ele.frontmatter.authorImg} alt={ele.frontmatter.author} />
                      </a>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        <a href={ele.frontmatter.authorIn} className="hover:underline">
                          {ele.frontmatter.author}
                        </a>
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <span>{ele.frontmatter.date}</span>
                        <span aria-hidden="true">&middot;</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
