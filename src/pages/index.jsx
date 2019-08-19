/*Library Imports */
import React from "react";

/* Component Imports */
import Layout from "../components/layout";
import SEO from "../components/seo";
import Cassette from "../components/cassette";

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }
  handleHideClick = () => this.setState({ visible: false });
  handleShowClick = () => this.setState({ visible: true });
  handleSidebarHide = () => this.setState({ visible: false });

  render() {
    const { visible } = this.state;
    return (
      <Layout
        visible={visible}
        handleSidebarHide={this.handleSidebarHide}
        handleShowClick={this.handleShowClick}
      >
        <SEO title="Home" />
        <div style={{ width: "80%", position: "relative", marginTop: 40 }}>
          <Cassette />
        </div>
      </Layout>
    );
  }
}

export default IndexPage;
