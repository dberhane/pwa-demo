import React, { Component } from 'react'
import Link from 'gatsby-link'

import BlogRoll from '../components/BlogRoll'
//import MostRead from '../components/MostRead'
//import Categories from '../components/Categories'

const NavLink = props => {
  if (!props.test) {
    return <Link to={props.url}>{props.text}</Link>
  } else {
    return <span>{props.text}</span>
  }
}

const IndexPage = ({ data, pathContext }) => {
  const { group, index, first, last, pageCount } = pathContext
  const previousUrl = index - 1 == 1 ? '' : (index - 1).toString()
  const nextUrl = (index + 1).toString()

  console.log(data)
  console.log(pathContext)

  return (
    <div style={{ marginTop: '1.5em' }}>
      <div width={12}>
        <h1>Latest blogs</h1>

        <ul>
          {group.map(({ node }) => (
            <li key={node.id} className={'post'} style={{ marginBottom: 50 }}>
              <h2>
                <Link to={'/post/' + node.slug}>{node.title}</Link>
              </h2>
              <div
                className={'post-content'}
                dangerouslySetInnerHTML={{ __html: node.excerpt }}
              />
              <i>{node.date}</i>
            </li>
          ))}
        </ul>

        <div>
          <button>
              <NavLink
                test={first}
                url={'/' + previousUrl}
                text="Previous Page"
              />
          </button>
          <button>
              <NavLink test={last} url={'/' + nextUrl} text="Next Page" />
          </button>
        </div>
      </div>

      <div width={4}>
        <categories />
        <BlogRoll />
        <mostRead />
      </div>
    </div>
  )
}
export default IndexPage

export const query = graphql`
  query allmostReadFeed {
    allDataJson(filter: { id: { regex: "/.*bmjopen-last30days/" } }) {
      edges {
        node {
          bmjsiteHead {
            id
            accountId
            webPropertyId
            name
            websiteUrl
          }
          bmjsiteData {
            pagePath
            pageTitle
            pageviews
          }
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
