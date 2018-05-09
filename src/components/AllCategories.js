import React from 'react'
import Link from 'gatsby-link'

const AllCategories = ({ categories }) => {
  console.log(categories)
  return (
    <div style={{ marginTop: 50 }}>
      <h2>Categories</h2>
      <ul style={{ listStyleType: 'none', paddingBottom: 20 }}>
        {categories.map(({ node }) => {
          if (node.name != 'new post') {
            return (
              <li key={node.id} style={{ paddingBottom: 5 }}>
                <Link to={`/post/category/${node.slug}`}>{node.name}</Link>
              </li>
            )
          }
        })}
      </ul>
    </div>
  )
}

export default AllCategories

export const query = graphql`
  query allCategoriesQuery {
    allWordpressCategory {
      edges {
        node {
          id
          name
          slug
          description
        }
      }
    }
  }
`
