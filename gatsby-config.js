require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    siteTitle: `Kanishkar J`,
    siteAuthor: `Kanishkar J`,
    siteTitleAlt: `Kanishkar J`,
    siteHeadline: `Kanishkar J`,
    siteUrl: `https://kanishkarj.github.io/`,
    siteDescription: `I'm Kanishkar - a Software engineer currently in Bangalore, India. This is where I write about exciting tech I come across and concepts and ideas that intrigue me. I hope you enjoy the content!`,
    mailchimpAction: 'https://hotmail.us3.list-manage.com/subscribe?u=69b142fa3c2334fe46a0c6f02&id=e1162b3bd6',
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        mdx: false,
        feed: true,
        feedTitle: `Kanishkar J`,
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
          {
            title: `Tags`,
            slug: `/tags`,
          },
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/_kanishkarj_`,
          },
          {
            name: `Github`,
            url: `https://github.com/kanishkarj`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1170,
              loading: 'lazy'
            },
          },
          {
            resolve: 'gatsby-remark-mermaid',
            options: {
                language: 'mermaid',
                theme: 'default',
                viewport: {
                  width: 600,
                  height: 600
              },
              mermaidOptions: {
                er:{
                  diagramPadding:20,
                  layoutDirection:'TB',
                  minEntityWidth:100,
                  minEntityHeight:75,
                  entityPadding:15,
                  stroke:'gray',
                  fill:'honeydew',
                  fontSize:12,
                  useMaxWidth:true,
                },
                flowchart:{
                  diagramPadding:8,
                  htmlLabels:true,
                  curve:'linear',
                },
                sequence:{
                  diagramMarginX:50,
                  diagramMarginY:10,
                  actorMargin:50,
                  width:150,
                  height:65,
                  boxMargin:10,
                  boxTextMargin:5,
                  noteMargin:10,
                  messageMargin:35,
                  messageAlign:'center',
                  mirrorActors:true,
                  bottomMarginAdj:1,
                  useMaxWidth:true,
                  rightAngles:false,
                  showSequenceNumbers:false,
                }
              }
            }
         },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
        // Puts tracking script in the head instead of the body
        head: true,
        // IP anonymization for GDPR compliance
        anonymize: true,
        // Disable analytics for users with `Do Not Track` enabled
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ['/preview/**'],
        // Specifies what percentage of users should be tracked
        sampleRate: 100,
        // Determines how often site speed tracking beacons will be sent
        siteSpeedSampleRate: 10,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kanishkar J`,
        short_name: `Kanishkar J`,
        description: `I'm Kanishkar - a Software engineer currently in Bangalore, India. This is where I write about exciting tech I come across and concepts and ideas that intrigue me. I hope you enjoy the content!`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icon: 'static/logo.png'
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
