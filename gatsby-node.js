exports.createPages = async function({actions: {createPage}, graphql}) {
    const data = await graphql(`
    query Blogs {
        allMarkdownRemark {
            nodes {
              frontmatter {
                slug
              }
            }
          }
    }
    `)

    if (data.errors) {
        console.log("Error is ", data.errors)
        return
    }
    const blogTemplate = require.resolve('./src/template/BlogTemplate.js')
    data.data.allMarkdownRemark.nodes.forEach(node => {
        createPage({
            path: `/blog/${node.frontmatter.slug}/`,
            component: blogTemplate,
            context: {
                slug: node.frontmatter.slug
            }
        })
    })
}