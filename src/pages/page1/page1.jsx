import React from "react"
import "./page1.less"
import profilePic from "../../components/static/profile.png"
import profileBg from "../../components/static/profileBg.png";

function Page1() {
  return (
    <div className="page1">
      <div className="wrapper">
        <div className="text">
          <div className="heading">
            <h2>Hi there!</h2>
            <h2>
              My name is
            </h2>
            <h1><b>Justin Sung</b></h1>
          </div>
          <p>
            I am an incoming Senior at UC San Diego who is currently pursuing a
            Bachelor's Degree in Math-Computer Science and is expected to
            graduate by 2021. Currently I am looking for internships in
            Front-End Development for both mobile and web based applications.
            Feel free to check out my website :)
          </p>
        </div>
        <div className="image">
          <img className="profile" src={profilePic} alt="Profile of Justin Sung" />
          <img className="background" src={profileBg} alt="Profile background" />
        </div>
      </div>
    </div>
  )
}

export default Page1
