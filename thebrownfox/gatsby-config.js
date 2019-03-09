module.exports = {
  siteMetadata: {
    title: 'The brown Fox',
    description:
      'I’m a freelance front-end developer. Specialized in responsive Web design, modern CSS, performance optimization and front end architecture. Together with you I work towards a website that amazes your clients. And ensures the right impression of your brand.',
    author: 'thebrownfox.be',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'thebrownfox.be',
        short_name: 'thebrownfox',
        start_url: '/',
        background_color: '#f06322',
        theme_color: '#f06322',
        display: 'minimal-ui',
        icon: 'src/images/logo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
};
