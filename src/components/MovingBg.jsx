/** @format */

import React, { useEffect } from "react"
import "./MovingBg.css"

const MovingBg = () => {
  useEffect(() => {}, [])
  const image1 = document.querySelector(".div1")
  const image2 = document.querySelector(".image-item-pic-02")
  const image3 = document.querySelector(".image-item-pic-03")
  const image4 = document.querySelector(".image-item-pic-04")
  console.log(image1)

  const sFront = 50
  const mouseMove = (e) => {
    const x = e.clientX
    const y = e.clientY
    if (
      image1 !== null &&
      image2 !== null &&
      image3 !== null &&
      image4 !== null
    ) {
      image1.style.transform = `
          translate(${x / sFront}%,${y / sFront}%)`
      image2.style.transform = `
          translate(${x / sFront}%,${y / sFront}%)`
      image3.style.transform = `
          translate(${x / sFront}%,${y / sFront}%)`
      image4.style.transform = `
          translate(${x / sFront}%,${y / sFront}%)`
    } else {
      console.log("Error loading")
    }
  }
  return (
    <div className='movin-bg-div'>
      <div className='div1'></div>
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
    </div>
  )
}

export default MovingBg
