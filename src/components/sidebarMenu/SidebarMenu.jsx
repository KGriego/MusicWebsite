/* Library Imports */
import React from "react";
import { navigate } from "gatsby";
import { Menu } from "semantic-ui-react";

/* Stlye Imports */
import "../../css/sidebarMenu.css";

class SidebarMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: "Tony Tone's Music" };
  }

  handleItemClick = (e, { name }) =>
    this.setState(
      { activeItem: name },
      navigate(name === "Tony Tone's Music" ? "/" : name)
    );

  render() {
    const { activeItem } = this.state;
    return (
      <Menu vertical compact secondary pointing className={"sidebarMenu"}>
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
          name={"Videos&Photos"}
          active={activeItem === "Videos&Photos"}
          onClick={this.handleItemClick}
        />
      </Menu>
    );
  }
}

export default SidebarMenu;
