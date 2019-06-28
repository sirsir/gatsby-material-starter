import React, { Component } from "react";
import UserLinks from "../UserLinks";
import "./ToolbarActions.scss";

class Toolbar extends Component {
  render() {
    const { config, menus } = this.props;
    return (
      <div className="toolbar-actions">
        <div className="userlinks-container">
          <UserLinks config={config} menus={menus} />
        </div>
      </div>
    );
  }
}

export default Toolbar;
