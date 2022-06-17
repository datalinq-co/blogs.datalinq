

module.exports = {
  /* Your site config here */
  plugins: ['gatsby-plugin-postcss', 'gatsby-plugin-netlify-cms', 'gatsby-transformer-json', 'gatsby-transformer-remark',
   {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'content',
      path: './content/posts/'
    }
  }],
}
