/* Library Imports */
import React from "react";
import { Link } from "gatsby";
import { Grid, Icon, Menu } from "semantic-ui-react";

/* Stlye Imports */
import "../../css/sidebarMenu.css";

class SidebarMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: "account" };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <Menu vertical compact secondary className={"sidebarMenu"}>
        <Menu.Item
          header
          name={"Tony Tone's Music"}
          active={activeItem === "Tony Tone's Music"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name={"About"}
          active={activeItem === "About"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name={"Contact"}
          active={activeItem === "Contact"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name={"Music"}
          active={activeItem === "Music"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name={"Live"}
          active={activeItem === "Live"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name={"Videos/Photos"}
          active={activeItem === "Videos/Photos"}
          onClick={this.handleItemClick}
        />
      </Menu>
    );
  }
}

export default SidebarMenu;
