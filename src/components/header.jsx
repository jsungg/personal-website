import React from "react"
import { Menu } from "antd"
import resume from "./static/JSungResume2021.pdf"
import "./static/header.less"

export default class HeaderMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: "none",
      visible: false, // drawer visibility
    }

    this.handleClick = e => {
      this.setState({
        current: e.key,
      })
    }
  }

  // open drawer
  showDrawer = () => {
    this.setState({
      visible: true,
    })
  }

  // close drawer
  onClose = () => {
    this.setState({
      visible: false,
    })
  }

  render() {
    return (
      <header>
        <Menu
          className="menu"
          key="menu"
          mode={"horizontal"}
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
        >
          <Menu.Item key="code-o">
            <a href="https://github.com/jsungg">Projects</a>
          </Menu.Item>
          <Menu.Item key="file">
            <a href={resume}>Resume</a>
          </Menu.Item>
        </Menu>
      </header>
    )
  }
}
