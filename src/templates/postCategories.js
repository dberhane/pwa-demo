import React, { Component } from "react"
import PropTypes from "prop-types"


import BlogRoll from '../components/BlogRoll'

class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost

    return (
      <div style={{marginTop:'1.5em'}}>
        <div>
          <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
        <div width={4}>
          <BlogRoll />
        </div>
      </div>
    )
  }
}
//<img src={post.image.sizes.thumbnail} />

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array
}

export default PostTemplate

export const pageQuery = graphql`
  query currentPostQuery($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`