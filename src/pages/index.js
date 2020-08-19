import React from "react"
import 'antd/dist/antd.css';
import HeaderMenu from "../components/header";
import Page1 from "./page1/page1";


export default function Home() {
  return (
    <>
      <HeaderMenu key="headermenu" />
      <Page1 key="page1" />
    </>
  );
}
