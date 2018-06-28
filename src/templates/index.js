import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layouts'

const NavLink = props => {
  if (!props.test) {
    return <Link to={props.url}>{props.text}</Link>
  } else {
    return <span>{props.text}</span>
  }
}

const IndexPage = ({ pageContext }) => {
  const { group, index, first, last } = pageContext
  const previousUrl = index - 1 === 1 ? '' : (index - 1).toString()
  const nextUrl = (index + 1).toString()

  return (
    <Layout>
      <div style={{marginTop: 40}}>
        <h1>Latest blogs</h1>

        <div
          className="postItems"
          style={{ listStyleType: 'none', margin: 0, padding: 0 }}
        >
          {group.map(({ node }) => [
            <div
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
            </div>,
            <hr />,
          ])}
        </div>

        <div className="tocNav">
          <button>
            <NavLink
              test={first}
              url={'/' + previousUrl}
              text="Previous Page"
            />
          </button>
          <button style={{float:"right"}}>
            <NavLink test={last} url={'/' + nextUrl} text="Next Page" />
          </button>
        </div>
      </div>
    </Layout>  
  )
}
export default IndexPage

