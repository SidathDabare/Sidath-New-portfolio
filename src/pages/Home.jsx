/** @format */

import React, { useState } from "react"

import { useEffect } from "react"
import "./Home.css"
import "../../src/components/MovingBg.css"
import { Container } from "react-bootstrap"
import { useSelector } from "react-redux"
import Spline from "@splinetool/react-spline"
import Spinner from "react-bootstrap/Spinner"
import Typewriter from "typewriter-effect"
// import ImageRedux from "../Images/image-01.png"
// import ImageJs from "../Images/image-02.png"
// import ImageReact from "../Images/image-03.png"
// import ImageMongo from "../Images/image-04.png"
import MovingBg from "../components/MovingBg"

const Home = (props) => {
  const themeColor = useSelector((state) => state.setColor.selectedColor)
  console.log(themeColor)
  const [loadingScean, setLoadingScean] = useState(true)
  const [style, setStyle] = useState({
    transform: "rotate(-45deg)",
  })

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

  // const parallax = document.querySelector(".home-container")

  // parallax.addEventListener("mousemove", (e) => {
  //   const x = e.clientX
  //   const y = e.clientY

  //   image.style.transform = `
  //       translate(${x / sFront}%,${y / sFront}%)`
  // })
  useEffect(() => {
    // setTimeout(() => {
    //   setLoadingScean(true)
    // }, 1500)
  }, [props])
  // const image1 = document.querySelector(".div1")
  // const image2 = document.querySelector(".div2")
  // const image3 = document.querySelector(".div3")
  // const image4 = document.querySelector(".image-item-pic-04")
  // console.log(image1)

  const sFront = 10
  const mouseMove = (e) => {
    const x = e.clientX
    const y = e.clientY
    setStyle({ transform: `translate(${x / sFront}%,${y / sFront}%)` })

    // if (
    //   image1 !== null &&
    //   image2 !== null &&
    //   image3 !== null &&
    //   image4 !== null
    // ) {
    //   image1.setStyle = `
    //       translate(${x / sFront}%,${y / sFront}%)`
    //   image2.style.transform = `
    //       translate(${x / sFront}%,${y / sFront}%)`
    //   image3.style.transform = `
    //       translate(${x / sFront}%,${y / sFront}%)`
    //   image4.style.transform = `
    //       translate(${x / sFront}%,${y / sFront}%)`
    // } else {
    //   console.log("Error loading")
    // }
  }

  return (
    <div className={themeColor ? "dark" : "light"}>
      <div className='home-container' onMouseOver={mouseMove}>
        <div
          className={
            themeColor
              ? "home-container-left add-bg-dark"
              : "home-container-left add-bg-light"
          }>
          <Container>
            <div className='section1-content  '>
              <p className=' text-animation animation-delay-200'>
                Hey! I am Sidath Dabare.
              </p>
              <p className=' text-animation animation-delay-100'>
                I'm a full stack developer
              </p>
              {/* <div>
                <Typewriter
                  options={{
                    strings: [
                      "Hey! I am Sidath Dabare.",
                      "I'm a full stack developer",
                      "I'm base in Padova/Italy",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div> */}
            </div>
          </Container>
        </div>
        <Container className='home-container-right'>
          {loadingScean ? (
            <>
              {/* <div className='movin-bg-div'>
                <div className='div1' style={style}></div>
                <div className='div2'></div>
                <div className='div3'></div>
                <div className='div4'></div>
                <div className='div5'></div>
                <div className='div6'></div>
                <div className='div7'></div>
                <div className='div8'></div>
                <div className='div9'></div>
                <div className='div10'></div>
                <div className='div11'></div>
                <div className='div12'></div>
                <div className='div13'></div>
                <div className='div14'></div>
              </div> */}
            </>
          ) : (
            // <div className='container-image-right'>
            //   {/* <Spline
            //     className='main-animation-spline'
            //     scene='https://prod.spline.design/WD9OeVV3mdZrCo5F/scene.splinecode'
            //   /> */}
            //   <div className='image-item'>
            //     <img
            //       className='image-item-pic-01'
            //       src={ImageRedux}
            //       alt='image01'
            //     />
            //   </div>
            //   <div className='image-item'>
            //     <img
            //       className='image-item-pic-02'
            //       src={ImageJs}
            //       alt='image02'
            //     />
            //   </div>
            //   <div className='image-item'>
            //     <img
            //       className='image-item-pic-03'
            //       src={ImageReact}
            //       alt='image03'
            //     />
            //   </div>
            //   <div className='image-item'>
            //     <img
            //       className='image-item-pic-04'
            //       src={ImageMongo}
            //       alt='image04'
            //     />
            //   </div>
            // </div>
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
