/** @format */

import React, { useState } from "react"

import { useEffect } from "react"
import "./Home.css"
import { Container } from "react-bootstrap"
import { useSelector } from "react-redux"
import Spline from "@splinetool/react-spline"
import Spinner from "react-bootstrap/Spinner"
import Typewriter from "typewriter-effect"

const Home = (props) => {
  const themeColor = useSelector((state) => state.setColor.selectedColor)
  console.log(themeColor)
  const [loadingScean, setLoadingScean] = useState(false)

  // const loadScean = async () => {
  //   try {
  //     let response = await fetch(
  //       `https://prod.spline.design/WD9OeVV3mdZrCo5F/scene.splinecode`
  //     )
  //     let data = await response
  //     if (data.ok) {
  //       setLoadingScean(true)
  //     } else {
  //       setLoadingScean(false)
  //     }
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  useEffect(() => {
    setTimeout(() => {
      setLoadingScean(true)
    }, 1500)
  }, [props])
  return (
    <div className={themeColor ? "dark" : "light"}>
      <div className='home-container'>
        <div
          className={
            themeColor
              ? "home-container-left add-bg-dark"
              : "home-container-left add-bg-light"
          }>
          <Container>
            <div className='section1-content text-animation animation-delay-100'>
              <p>Hey! I am Sidath Dabare.</p>
              <div>
                <Typewriter
                  options={{
                    strings: ["I'm full stack developer"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </div>
          </Container>
        </div>
        <Container className='home-container-right'>
          {loadingScean ? (
            <div>
              <Spline
                className='main-animation-spline'
                scene='https://prod.spline.design/WD9OeVV3mdZrCo5F/scene.splinecode'
              />
            </div>
          ) : (
            <div className='w-75 d-flex justify-content-center align-items-center'>
              <Spinner animation='grow' />
            </div>
          )}
        </Container>
      </div>
    </div>
  )
}

export default Home
