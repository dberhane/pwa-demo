import React from 'react'
import Link from 'gatsby-link'

const MostRead = ({ gdata, ghead = 'Most Read', gsite = 0 }) => {
  const mostReadItems = gdata[gsite].node.bmjsiteData
  const websiteUrl = gdata[gsite].node.bmjsiteHead[0].websiteUrl
console.log(mostReadItems)
  return (
    <div>
      <h2>{ghead}</h2>
      <ol style={{ paddingBottom: 20 }}>
        {mostReadItems.map((node, i = 0) => (
          <li style={{ paddingBottom: 10 }} key={i++}>
            <a href={`${websiteUrl}${node.pagePath}`}>{node.pageTitle}</a>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default MostRead
