import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import BlogRoll from '../components/BlogRoll'

class PostTemplate extends Component {
  render() {

    const postCategory = this.props.pathContext.name
    const posts = this.props.data.allWordpressPost.edges

    return (
      <div>
        <h1>Category: {postCategory}</h1>

        {posts.map(({ node }) => (
          <div key={node.id}>
            <h2>
              <Link to={`/post/${node.slug}`}>{node.title}</Link>
            </h2>
            <div
              className="excerpt"
              dangerouslySetInnerHTML={{ __html: node.excerpt }}
            />
            <i>{node.date}</i>
          </div>
        ))}

        <div>
          <BlogRoll />
        </div>
      </div>
    )
  }
}

//<img src={post.image.sizes.thumbnail} />

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default PostTemplate

export const pageQuery = graphql`
  query currentPostCategoriesQuery($slug: String!) {
    allWordpressPost(filter: { categories: { slug: { eq: $slug } } }) {
      edges {
        node {
          id
          title
          slug
          date
          excerpt
          categories {
            id
            name
            slug
          }
        }
      }
    }
  }
`
