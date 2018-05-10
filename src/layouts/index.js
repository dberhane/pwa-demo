import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.css'
import 'mini.css/dist/mini-default.min.css'
//import 'mini.css/dist/mini-pwa.min.css'

import BlogRoll from '../components/BlogRoll'
import MostRead from '../components/MostRead'
import AllCategories from '../components/AllCategories'

const Layout = ({ children, data }) => (
 <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        {name: 'lang', content: 'en'},
        { name: 'description', content: 'PWA website' },
        { name: 'keywords', content: 'paw, gatsby, react' },
      ]}
    >
     <html lang="en" />
    </Helmet>
    <Header siteTitle={data.site.siteMetadata.title} />

    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-7 col-lg-offset-1">
          {children()}
        </div>

        <div className="col-sm-12 col-md-12 col-lg-3">
          <div width={4}>
            <AllCategories categories={data.allWordpressCategory.edges} />
            <BlogRoll />
            <MostRead gdata={data.allDataJson.edges} ghead="BMJ Open most read" />
          </div>
        </div>
      </div>
    </div>

    <footer>
      <p>
        &copy; BMJ Publishing Group Ltd. 2018 | <a href="/">About</a> |{' '}
        <a href="/">Terms of use</a>
      </p>
    </footer>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
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
  }
`
