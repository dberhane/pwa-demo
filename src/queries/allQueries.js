module.exports = `
    {
        allWordpressPage {
            edges {
              node {
                id
                slug
                status
                template
              }
            }
        }
        
        allWordpressPost(sort: {fields:[date], order: DESC}) {
            edges {
              node {
                id
                slug
                title
                excerpt
                status
                date(formatString: "MMMM DD, YYYY")
                template
                format
              }
            }
          }

          allWordpressCategory {
            edges {
              node {
                id
                name
                slug
              }
            }
          }   
          
    }
`
