import React, { useEffect, useRef } from "react"
import "./page1.less"
import profilePic from "../../components/static/profile.png"

function Page1() {
  const canvasRef = useRef(null)

  const getPixelRatio = context => {
    var backingStore =
      context.backingStorePixelRatio ||
      context.webkitBackingStorePixelRatio ||
      context.mozBackingStorePixelRatio ||
      context.msBackingStorePixelRatio ||
      context.oBackingStorePixelRatio ||
      context.backingStorePixelRatio ||
      1

    return (window.devicePixelRatio || 1) / backingStore
  }

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext("2d")

    const ratio = getPixelRatio(context)
    const width = getComputedStyle(canvas)
      .getPropertyValue("width")
      .slice(0, -2)
    const height = getComputedStyle(canvas)
      .getPropertyValue("height")
      .slice(0, -2)

    canvas.width = width * ratio
    canvas.height = height * ratio
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`

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

    balls.push(new Circle(width / 2, height / 2, 700, "#b4ede3"))
    balls.push(new Circle(30, height, 800, "#82bfb5"))
    balls.push(new Circle(20, 20, 600, "#87e0d1"))
    balls.push(new Circle(width / 1.4, height / 4, 350, "#73c7b9"))
    balls.push(new Circle(width, height, 800, "#9fd1c9"))

    function update() {
      context.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < 5; i++) {
        balls[i].animate()
      }
      requestAnimationFrame(update)
    }

    update()
  })

  return (
    <div className="page1">
      <div className="wrapper">
        <img
          className="profile"
          src={profilePic}
          alt="Profile of Justin Sung"
        />
        <div className="text">
          <div className="heading">
            <h1>Hi, I'm Justin</h1>
          </div>
          <p>
            I am an incoming Senior at UC San Diego who is currently pursuing a
            Bachelor's Degree in Math-Computer Science and is expected to
            graduate by 2021. Currently I am looking for internships in
            Front-End Development for both mobile and web based applications.
            Feel free to check out my website :)
          </p>
        </div>
      </div>
      <canvas ref={canvasRef} />
    </div>
  )
}

export default Page1
