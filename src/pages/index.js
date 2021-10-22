import React from "react"
import 'antd/dist/antd.css';
import Navbar from "../components/navbar";
import Page1 from "./landing/landing";


export default function Home() {
  return (
    <>
      <Navbar key="navbar" />
      <Page1 key="page1" />
    </>
  );
}
