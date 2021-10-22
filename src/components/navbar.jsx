import React, { useState } from "react"
import { Menu } from "antd"
import resume from "./static/JSungResume2021.pdf"
import "./static/header.less"

const Navbar = () => {
  const [current, setCurrent] = useState("none")
  // const [visible, setVisible] = useState(false);

  const handleClick = e => {
    setCurrent(e.key)
  }

  // open drawer
  // const showDrawer = () => {
  //   setVisible(true);
  // }

  // close drawer
  // const onClose = () => {
  //  setVisible(false);
  // }

  return (
    //TODO drawer element for mobile
    <header>
      <Menu
        className="menu"
        key="menu"
        mode={"horizontal"}
        onClick={() => {
          handleClick()
        }}
        selectedKeys={[current]}
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

export default Navbar
