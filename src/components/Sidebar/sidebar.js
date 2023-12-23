import React, { Component, Fragment } from "react";
import classnames from "classnames";
import PerfectScrollbar from "react-perfect-scrollbar";
import "../../assets/scss/components/sidebar/sidebar.scss";
import AdminSideMenuContent from "./sidemenu/sidemenu";
import SidebarHeader from "./sidebarHeader/sidebarHeader";
import { FoldedContentConsumer } from "../../utility/context/toggleContentContext";
import templateConfig from "../../utility/templateConfig";

class Sidebar extends Component {
  state = {
    collapsedSidebar: templateConfig.sidebar.collapsed,
    width: window.innerWidth,
  };
  updateWidth = () => {
    this.setState((prevState) => ({
      width: window.innerWidth,
    }));
  };

  handleCollapsedSidebar = (collapsedSidebar) => {
    this.setState({ collapsedSidebar });
  };

  componentDidMount() {
    if (window !== "undefined") {
      window.addEventListener("resize", this.updateWidth, false);
    }
  }

  componentWillUnmount() {
    if (window !== "undefined") {
      window.removeEventListener("resize", this.updateWidth, false);
    }
  }
  handleMouseEnter = (e) => {
    this.setState((prevState) => ({
      collapsedSidebar: false,
    }));
  };

  handleMouseLeave = (e) => {
    this.setState((prevState) => ({
      collapsedSidebar: true,
    }));
  };

  render() {
    if (JSON.parse(window.localStorage.getItem("user")) != null) {
      const user = JSON.parse(window.localStorage.getItem("user"));
      const role = user.roleId;
      let adminSidebar = (
        <AdminSideMenuContent
          collapsedSidebar={this.state.collapsedSidebar}
          toggleSidebarMenu={this.props.toggleSidebarMenu}
        />
      );

      return (
        <Fragment>
          <FoldedContentConsumer>
            {(context) => (
              <div
                data-active-color="white"
                data-background-color={
                  this.props.color === ""
                    ? templateConfig.sidebar.backgroundColor
                    : this.props.color
                }
                className={classnames(
                  "app-sidebar",
                  {
                    "": !this.state.collapsedSidebar,
                    collapsed: this.state.collapsedSidebar,
                  },
                  {
                    "hide-sidebar":
                      this.state.width < 991 &&
                      this.props.sidebarState === "close",
                    "": this.props.sidebarState === "open",
                  }
                )}
                onMouseEnter={
                  context.foldedContent ? this.handleMouseEnter : null
                }
                onMouseLeave={
                  context.foldedContent ? this.handleMouseLeave : null
                }
              >
                <SidebarHeader
                  toggleSidebarMenu={this.props.toggleSidebarMenu}
                  sidebarBgColor={this.props.color}
                />
                <PerfectScrollbar className="sidebar-content">
                  {adminSidebar}
                </PerfectScrollbar>
              </div>
            )}
          </FoldedContentConsumer>
        </Fragment>
      );
    }
    let adminSidebar = (
      <AdminSideMenuContent
        collapsedSidebar={this.state.collapsedSidebar}
        toggleSidebarMenu={this.props.toggleSidebarMenu}
      />
    );
    return (
      <Fragment>
        <FoldedContentConsumer>
          {(context) => (
            <div
              data-active-color="white"
              data-background-color={
                this.props.color === ""
                  ? templateConfig.sidebar.backgroundColor
                  : this.props.color
              }
              className={classnames(
                "app-sidebar",
                {
                  "": !this.state.collapsedSidebar,
                  collapsed: this.state.collapsedSidebar,
                },
                {
                  "hide-sidebar":
                    this.state.width < 991 &&
                    this.props.sidebarState === "close",
                  "": this.props.sidebarState === "open",
                }
              )}
              onMouseEnter={
                context.foldedContent ? this.handleMouseEnter : null
              }
              onMouseLeave={
                context.foldedContent ? this.handleMouseLeave : null
              }
            >
              <SidebarHeader
                toggleSidebarMenu={this.props.toggleSidebarMenu}
                sidebarBgColor={this.props.color}
              />
              {adminSidebar}
            </div>
          )}
        </FoldedContentConsumer>
      </Fragment>
    );
  }
}

export default Sidebar;
