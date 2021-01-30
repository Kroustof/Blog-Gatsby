import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'

import { List, Avatar, Divider } from 'antd'


const Bio = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          authorDescription
          photo
        }
      }
    }
  `)
  
  return (
    <>
    <Divider orientation="left">Author</Divider>
    <List.Item>
      <List.Item.Meta
        avatar={<Avatar src={require("../images/author.png")} size={64} alt={data.site.siteMetadata.author} />}
        title={<Link to="/about">{data.site.siteMetadata.author}</Link>}
        description={data.site.siteMetadata.authorDescription}
      />
    </List.Item>
    </>
  )
}

export default Bio
