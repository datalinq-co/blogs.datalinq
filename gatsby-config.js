

module.exports = {
  /* Your site config here */
  plugins: ['gatsby-plugin-postcss', 'gatsby-plugin-netlify-cms', 'gatsby-transformer-json',{
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'data',
      path: './data/'
    }
  }],
}
