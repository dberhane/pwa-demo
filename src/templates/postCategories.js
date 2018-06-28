import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from "../components/Layouts"

class PostTemplate extends Component {
  render() {
    const postCategory = this.props.pageContext.name
  //  console.log(this.props.data)
    const posts = this.props.data.allWordpressPost.edges
  
    return (
      <Layout style={{ marginTop: 40 }}>
        <h1>Category: {postCategory}</h1>
        <ul
          className="postItems"
          style={{ listStyleType: 'none', margin: 0, padding: 0 }}
        >
          {posts.map(({ node }) => [
            <li
              key={node.id}
              className={'post'}
              style={{ marginTop: 20, marginBottom: 40 }}
            >
              <Link to={`/post/${node.slug}`}>
                <h3>{node.title}</h3>
              </Link>
              <div
                className="excerpt"
                dangerouslySetInnerHTML={{ __html: node.excerpt }}
              />
              <div style={{ paddingLeft: 10 }}>
                <i>{node.date}</i>
              </div>
            </li>,
            <hr />,
          ])}
        </ul>
      </Layout>
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
          date(formatString: "MMMM DD, YYYY")
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
