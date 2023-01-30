/** @format */

import React from "react"
import { Container } from "react-bootstrap"
import { useSelector } from "react-redux"
import "./WorkDisplay.css"

const WorkDisplay = () => {
  const themeColor = useSelector((state) => state.setColor.selectedColor)
  return (
    <div className={themeColor ? "dark" : "light"}>
      <Container className='home-display'></Container>
    </div>
  )
}

export default WorkDisplay
