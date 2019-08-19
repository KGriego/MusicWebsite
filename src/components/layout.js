/* Library Imports */
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Menu, Sidebar } from "semantic-ui-react";

/* Component Imports */
import Header from "./header";
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
    <Sidebar.Pushable as={"div"}>
      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        inverted
        onHide={handleSidebarHide}
        vertical
        visible={visible}
        width="thin"
      >
        Menu in here
      </Sidebar>
      <Sidebar.Pusher>
        <Header
          siteTitle={data.site.siteMetadata.title}
          handleShowClick={handleShowClick}
        />
        <main>{children}</main>
        {/* Footer here */}
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
};

export default Layout;
