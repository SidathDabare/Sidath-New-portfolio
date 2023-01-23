/** @format */

import React, { useState } from "react"
import { useEffect } from "react"
import { Container } from "react-bootstrap"
import { useInView } from "react-intersection-observer"
import AnimatePolygon from "../components/AnimatePolygon"

import "./Home.css"

const Home = (props) => {
  const { ref: myRef, inView: myElementIsVisible } = useInView()
  const { ref: magicSectionRef, inView: magicSectionIsVisible } = useInView()
  useEffect(() => {}, [props])
  return (
    <div className={!props.theme ? "dark" : "light"}>
      <Container className='section-01'>
        <div className='section1-content'>
          <p>Hey! I am Sidath Dabare</p>
          <p>I'm a fullstack developer</p>
          {/* <p>run across platforms & devices</p> */}
        </div>
      </Container>
      <Container className='section-02'>
        <AnimatePolygon />
      </Container>
      <Container className='section-03'>
        <svg
          ref={myRef}
          width='177'
          height='203'
          viewBox='0 0 177 203'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            className={myElementIsVisible ? "polygon2" : ""}
            d='M4.59842 53.0594L88.5 4.6188L172.402 53.0594V149.941L88.5 198.381L4.59842 149.941V53.0594Z'
            stroke='white'
            strokeLinejoin='round'
            strokeWidth='8'
          />
        </svg>
      </Container>
      <Container className='section-04'>
        <h2 ref={magicSectionRef}>Magic 🪄</h2>
        <p>
          <span className={magicSectionIsVisible ? "rocket animateRocket" : ""}>
            🚀
          </span>
        </p>
      </Container>
    </div>
  )
}

export default Home
