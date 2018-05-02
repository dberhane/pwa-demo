import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'

import 'basscss/css/basscss.min.css'
import 'basscss-grid/css/grid.css'
import 'basscss-border/css/border.css'
import 'basscss-layout/css/layout.css'
import 'basscss-typography/css/typography.css'
import 'basscss-margin/css/margin.css'
import 'basscss-padding/css/padding.css'
import 'basscss-position/css/position.css'
import 'basscss-type-scale/css/type-scale.css'
import 'basscss-utility-headings/css/utility-headings.css'
import 'basscss-background-images/css/background-images.css'
import 'basscss-btn/css/btn.css'
import 'basscss-colors/css/colors.css'
import 'basscss-background-colors/css/background-colors.css'

const Layout = ({ children, data }) => (
  <div style={{fontFamily:'inherit', fontSize: 'inherit', textDecoration: 'none' }}>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <div className="container px2 py3">
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>{children()}</div>
    </div>
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
  }
`
