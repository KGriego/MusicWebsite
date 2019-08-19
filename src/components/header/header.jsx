/* Library Imports */
import React from "react";
import { Link } from "gatsby";
import { Grid, Icon } from "semantic-ui-react";

/* Stlye Imports */
import "../../css/header.css";

const Header = ({ siteTitle, handleShowClick }) => (
  <header className={"header"}>
    <Grid columns={"equal"} textAlign={"center"}>
      <Grid.Row>
        <Grid.Column mobile={"1"} only={"mobile"} textAlign={"left"}>
          <Icon name={"bars"} onClick={handleShowClick} />
        </Grid.Column>
        <Grid.Column only={"computer tablet"}>
          <Link to={"/About"}>About</Link>
        </Grid.Column>
        <Grid.Column mobile={"13"}>
          <Link className={"logo"} to={"/"}>
            {siteTitle}
          </Link>
        </Grid.Column>
        <Grid.Column only={"computer tablet"}>
          <Link to={"/Music"}>Music</Link>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </header>
);

export default Header;
