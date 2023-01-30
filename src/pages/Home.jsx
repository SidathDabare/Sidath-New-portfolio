/** @format */

import React, { useState } from "react"
import { useEffect } from "react"
import { Container } from "react-bootstrap"
import { useSelector } from "react-redux"

import "./Home.css"

const Home = (props) => {
  const themeColor = useSelector((state) => state.setColor.selectedColor)
  console.log(themeColor)
  useEffect(() => {}, [props])
  return (
    <div className={themeColor ? "dark" : "light"}>
      <Container className='home-container'>
        <div className='section1-content'>
          <p>Hey! I am Sidath Dabare</p>
          <p>I'm a fullstack developer</p>
          {/* <p>run across platforms & devices</p> */}
        </div>
      </Container>
    </div>
  )
}

export default Home
