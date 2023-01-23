/** @format */

import { GppMaybeOutlined } from "@mui/icons-material"
import React from "react"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import "./AnimatePolygon.css"

const AnimatePolygon = (props) => {
  const { ref: myRefLeft, inView: myElementIsLeftVisible } = useInView()
  const { ref: myRefRight, inView: myElementIsRightVisible } = useInView()

  useEffect(() => {
    let myline = document.getElementById("myline")
    let length = myline.getTotalLength()

    myline.style.strokeDasharray = length
    myline.style.strokeDashoffset = length

    const calcoScrollpercent = () => {
      let height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight

      return document.documentElement.scrollTop / (height / 3)
    }
    const drawWhenScroll = () => {
      const draw = length * calcoScrollpercent()
      myline.style.strokeDashoffset = draw
      myline.style.strokeDashoffset = length - draw
    }
    window.addEventListener("scroll", drawWhenScroll)
  }, [])

  return (
    <div className='animation-polygon'>
      {" "}
      <svg
        id='mySVG'
        preserveAspectRatio='xMidYMin slice'
        width='221'
        height='221'
        viewBox='0 0 221 221'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <rect
          x='110.309'
          y='7.07107'
          width='146'
          height='146'
          transform='rotate(45 110.309 7.07107)'
          stroke='white'
          strokeWidth='10'
          id='myline'
          className='st0'
          strokeDasharray='10,9'
        />
      </svg>
      <div className='text-content'>
        <div
          ref={myRefLeft}
          className={
            myElementIsLeftVisible ? "top-text leftAnimation" : "top-text"
          }>
          <h1>"GOOD DESIGN ADDS VALUE</h1>
        </div>
        <div
          ref={myRefRight}
          className={
            myElementIsRightVisible
              ? "bottom-text rightAnimation"
              : "bottom-text"
          }>
          <h1>FASTER THAN IT ADDS COST"</h1>
        </div>
      </div>
    </div>
  )
}

export default AnimatePolygon
