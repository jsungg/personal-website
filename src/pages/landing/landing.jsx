import React, { useEffect, useRef, useState } from "react"
import "./page1.less"
import profilePic from "../../components/static/profile.png"
import resume from "../../components/static/Justin_Sung_Resume_2021.pdf"

function Page1() {
  const canvasRef = useRef(null)
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  useEffect(() => {
    updateWidthAndHeight()

    const canvas = canvasRef.current
    const context = canvas.getContext("2d")

    context.filter = "blur(00px)"

    function Circle(x, y, r, c) {
      this.x = x
      this.y = y
      this.r = r
      this.c = c
      this.i = 0

      this.draw = function () {
        context.beginPath()
        context.arc(
          this.x,
          this.y,
          this.r * Math.abs(Math.cos(this.i)),
          0,
          2 * Math.PI
        )
        context.fill()
        context.fillStyle = this.c
      }

      this.animate = function () {
        if (this.i > 0.4) {
          this.i = -this.i
        } else {
          this.i += Math.random() * 0.0009 + 0.001
        }

        this.draw()
      }
    }

    const balls = []

    balls.push(new Circle(30, canvas.height, canvas.height / 2.5, "#82bfb5"))
    balls.push(new Circle(20, 20, canvas.height / 1.5, "#87e0d1"))
    balls.push(
      new Circle(
        canvas.width / 1.4,
        canvas.height / 4,
        canvas.height / 3,
        "#73c7b9"
      )
    )
    balls.push(
      new Circle(canvas.width, canvas.height, canvas.height / 1.2, "#b4ede3")
    )

    function update() {
      context.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < 4; i++) {
        balls[i].animate()
      }
      requestAnimationFrame(update)
    }

    update()
  })

  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight)
    return () => window.removeEventListener("resize", updateWidthAndHeight)
  })

  return (
    <>
      <header>
        <div className="menu">
          <h2 className="hover-underline-animation">
            <a href={"https://github.com/jsungg"}>Projects</a>
          </h2>

          <h2 className="hover-underline-animation">
            <a href={resume}>Resume</a>
          </h2>
        </div>
      </header>

      <section>
        <div className="background">
          <canvas
            ref={canvasRef}
            width={width}
            height={height}
            style={{
              width: `${width}px`,
              height: `${height}px`,
            }}
          />
        </div>
        <div className="container">
          <div className="split">
            <div className="profile-pic">
              <img src={profilePic} alt="Profile Pic of Justin Sung" />
            </div>
            <div className="text">
              <h1>Hi, I'm Justin</h1>
              <p>
                I am software developer who recently graduated from UC San Diego with
                a Bachelor's Degree in Math-Computer Science. Currently I am looking for
                full time Front-End Development positions for both mobile and web
                based applications, and Software Engineer positions as well. 
                Feel free to check out my website :)
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Page1
