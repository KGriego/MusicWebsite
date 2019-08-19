/* Library Imports */
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Menu, Sidebar } from "semantic-ui-react";

/* Component Imports */
import Header from "./header";
import SidebarMenu from "./sidebarMenu";
import "semantic-ui-css/semantic.min.css";

const Layout = ({ children, handleSidebarHide, handleShowClick, visible }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <Sidebar.Pushable as="div">
      <Sidebar
        animation={"push"}
        as={Menu}
        icon={"labeled"}
        onHide={handleSidebarHide}
        vertical
        visible={visible}
        width={"thin"}
      >
        <SidebarMenu />
      </Sidebar>
      <Sidebar.Pusher>
        <Header
          handleShowClick={handleShowClick}
          siteTitle={data.site.siteMetadata.title}
        />
        <main>{children}</main>
        {/* Footer here */}
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
};

export default Layout;
