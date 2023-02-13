/** @format */

import React, { useRef, useState } from "react"

import { useEffect } from "react"
import "./Home.css"
import "../../src/components/MovingBg.css"
import { Container } from "react-bootstrap"
import { useSelector } from "react-redux"
import Spline from "@splinetool/react-spline"
import Spinner from "react-bootstrap/Spinner"
import Typewriter from "typewriter-effect"
import ImagePurple from "../Images/dot-purple.png"
import ImageBlue from "../Images/dot-blue.png"
// import ImageReact from "../Images/image-03.png"
// import ImageMongo from "../Images/image-04.png"
// import MovingBg from "../components/MovingBg"
import gsap from "gsap"

const Home = (props) => {
  const themeColor = useSelector((state) => state.setColor.selectedColor)
  // console.log(themeColor)
  const [loadingScean, setLoadingScean] = useState(true)

  const div1Ref = useRef()
  const div2Ref = useRef()
  const [style, setStyle] = useState({
    transform: "rotate(-45deg)",
  })
  const [styleSlow, setStyleSlow] = useState({
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
    console.log(div1Ref)
    // gsap.to(".div-animation", {
    //   transformOrigin: "center-top",
    // })
  }, [props, style])
  // const image1 = document.querySelector(".div1")
  // const image2 = document.querySelector(".div2")
  // const image3 = document.querySelector(".div3")
  // const image4 = document.querySelector(".image-item-pic-04")
  // console.log(image1)

  const sFast = 50
  const sSlow = 100
  const mouseMove = (e) => {
    const x = e.clientX
    const y = e.clientY
    setStyle({
      transform: `translate(${x / sFast}%,${y / sFast}%) rotate(-45deg)`,
      transition: "0.5s ease-in-out",
      // transitionDelay: "50ms",
    })
    setStyleSlow({
      transform: `translate(${x / sSlow}%,${y / sSlow}%) rotate(-45deg)`,
      transition: "0.3s ease-in-out",
      // transitionDelay: "100ms",
    })
    gsap.to(".div-animation", {
      keyframes: {
        y: [0, 80, -10, 30, 0],
        ease: "none",
        easeEach: "elastic.easeInOut",
      },
      ease: "elastic.easeInOut",
      duration: "5",
      stagger: "0.2",
      // borderRadius: 100,
      // duration: 1,
      // x: -20,
      // y: -20,
      // ease: "bounce",
      // stagger: 0.2,
    })
  }

  return (
    <div className={themeColor ? "dark" : "light"}>
      <div className='home-container' onMouseMove={mouseMove}>
        <div
          className={
            themeColor
              ? "home-container-left add-bg-dark"
              : "home-container-left add-bg-light"
          }>
          <Container>
            <div className='section1-content  '>
              <p className='text-animation animation-delay-200'>
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
              <div className='movin-bg-div'>
                <div
                  ref={div1Ref}
                  className='div-animation div1'
                  style={style}></div>
                <div
                  ref={div2Ref}
                  className='div-animation div2'
                  style={styleSlow}></div>
                <div
                  ref={div1Ref}
                  className='div-animation div3'
                  style={style}></div>
                <div
                  ref={div2Ref}
                  className='div-animation div4'
                  style={style}></div>
                <div
                  ref={div1Ref}
                  className='div-animation div5'
                  style={styleSlow}></div>
                <div
                  ref={div2Ref}
                  className='div-animation div6'
                  style={style}></div>
                <div
                  ref={div1Ref}
                  className='div-animation div7'
                  style={styleSlow}></div>
                <div
                  ref={div2Ref}
                  className='div-animation div8'
                  style={style}></div>
                <div
                  ref={div1Ref}
                  className='div-animation div9'
                  style={styleSlow}></div>
                <div
                  ref={div2Ref}
                  className='div-animation div10'
                  style={style}></div>
                <div
                  ref={div2Ref}
                  className='div-animation div14'
                  style={style}></div>
                <div
                  ref={div1Ref}
                  className='div-animation div11'
                  style={styleSlow}></div>
                <div ref={div2Ref} className='div12' style={style}>
                  <img
                    src={ImagePurple}
                    className='div-animation div12-img'
                    style={style}
                    alt=''
                  />
                </div>
                <div ref={div1Ref} className='div13' style={styleSlow}>
                  <img
                    src={ImageBlue}
                    className='div-animation div13-img'
                    alt=''
                    style={styleSlow}
                  />
                </div>
              </div>
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
