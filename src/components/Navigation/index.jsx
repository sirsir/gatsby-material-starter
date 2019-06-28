import React, { Component } from "react";
import NavigationDrawer from "react-md/lib/NavigationDrawers";
import Drawers from "react-md/lib/Drawers";
import ToolbarActions from "../ToolbarActions";
import Footer from "../Footer";
import GetNavList from "./NavList";
import "./Navigation.scss";

class Navigation extends Component {
  render() {
    const { children, config, LocalTitle, menus } = this.props;
    const footerLinks = LocalTitle !== "About";
    return (
     
      // <Drawers
      //   navItems={GetNavList(config, menus)}
        
      // >
      <div>
        <div className="main-container">{children}</div>
        <Footer userLinks={footerLinks} />
        </div>
      // </Drawers>
    );

    // return <div>xxx</div>

  }
}

export default Navigation;


{/* <NavigationDrawer
drawerTitle={config.siteTitle}
toolbarTitle={LocalTitle}
contentClassName="main-content"
navItems={GetNavList(config, menus)}
mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
tabletDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
desktopDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
toolbarActions={<ToolbarActions config={config} menus={menus} />}
> */}