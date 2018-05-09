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

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-7 col-lg-offset-1">
          <div width={12}>
            <h1>Latest blogs</h1>

            <ul
              className="postItems"
              style={{ listStyleType: 'none', margin: 0, padding: 0 }}
            >
              {group.map(({ node }) => [
                <li
                  key={node.id}
                  className={'post'}
                  style={{ marginTop: 20, marginBottom: 40 }}
                >
                  <Link to={'/post/' + node.slug}>
                    <h3>{node.title}</h3>
                  </Link>

                  <div
                    className={'post-content'}
                    dangerouslySetInnerHTML={{ __html: node.excerpt }}
                  />
                  <div style={{ paddingLeft: 10 }}>
                    <i>{node.date}</i>
                  </div>
                </li>,
                <hr />,
              ])}
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
        </div>

        <div className="col-sm-12 col-md-12 col-lg-3">
          <div width={4}>
            <categories />
            <BlogRoll />
            <mostRead />
          </div>
        </div>
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
