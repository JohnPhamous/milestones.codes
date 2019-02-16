module.exports = {
  siteMetadata: {
    title: `Milestones for Programming`,
    description: `Milestones for Programming is a checklist to help you track your journey on learning how to program.`,
    author: `@johnphamous`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Milestones for Programming`,
        short_name: `Milestones`,
        start_url: `/`,
        background_color: `#edba2d`,
        theme_color: `#edba2d`,
        display: `minimal-ui`,
        icon: `src/images/logo.png` // This path is relative to the root of the site.
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      }
    }
  ]
};
