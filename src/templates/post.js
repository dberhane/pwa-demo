import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from '../components/Layouts'

class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost

    return (
      <Layout style={{marginTop:'1.5em'}}>
        <div>
          <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </Layout>
    )
  }
}
//<img src={post.image.sizes.thumbnail} />


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