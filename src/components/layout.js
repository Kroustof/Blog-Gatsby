/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

// import Header from "./header"
// import "./layout.css"

import { Layout, Menu } from 'antd'
import { HomeOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons'

const { Header, Content, Footer, Sider } = Layout


const GLayout = ({ children, page }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider breakpoint="lg" collapsedWidth="0">
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[page]}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/">
              <span className="nav-text">Home</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            <a href="https://hc.rs/youtube">
              <span className="nav-text">Youtube</span>
            </a>
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}> 
            <Link to="/page-2">
              <span className="nav-text">Page 2</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<UserOutlined />}>
            <Link to="/about">
              <span className="nav-text">About</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: "#001529", padding: "0 8px" }}>
          <h1 style={{ color: "white" }}>{data.site.siteMetadata.title}</h1>
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
            <div style={{ maxWidth: 960 }}>{children}</div>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Hardcoders ©2019 Created by Antho Welc
        </Footer>
      </Layout>
    </Layout>
  )
}

GLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default GLayout
