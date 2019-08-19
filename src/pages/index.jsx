import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

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
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ marginBottom: `1.45rem` }}>
          My name is Kevin. Your go by Tony Tone. You play Latin, Jazz, Raggae,
          Funk, R&B, Carribean and just Music.
        </div>
      </Layout>
    );
  }
}

export default IndexPage;
