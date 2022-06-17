
// const posts = require('./blog_cms/posts.json')
// const dataPost = require('./data/posts.json')


// exports.createPages = async function({actions: {createPage}, graphql}) {
//     const data = await graphql(`
//     {
//         allPostsJson {
//             edges {
//                 node {
//                     slug
//                 }
//             }
//         }
//     }
//     `)

//     if (data.errors) {
//         console.log("Error is ", data.errors)
//         return
//     }
//     const blogTemplate = require.resolve('./src/template/BlogTemplate.js')
//     data.data.allPostsJson.edges.forEach(edge => {
//         createPage({
//             path: `/blog/${edge.node.slug}/`,
//             component: blogTemplate,
//             context: {
//                 slug: edge.node.slug
//             }
//         })
//     })
// }