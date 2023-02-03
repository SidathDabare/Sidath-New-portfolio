/** @format */

import React from "react"
import { useSelector } from "react-redux"
import MyPic from "../Images/my-pic.png"
import "./About.css"

const RESUME_PDF = process.env.REACT_APP_CLIENT_URL

const About = () => {
  const themeColor = useSelector((state) => state.setColor.selectedColor)

  const downloadFile = (url) => {
    const fileName = url.split("/").pop()
    const aTag = document.createElement("a")
    aTag.href = url
    aTag.setAttribute("download", fileName)
    document.body.appendChild(aTag)
    aTag.click()
    aTag.remove()
  }

  return (
    <div className={themeColor ? "dark" : "light"}>
      <div className='about-div'>
        <div className='about-content-div'>
          <div className='about-content-left'>
            <img
              src={MyPic}
              className='my-pic text-animation animation-delay-300'
              alt='my-pic'
            />
          </div>
          <div className='about-content-right'>
            <div className='about-top-div text-animation'>
              <h1>ABOUT</h1>
            </div>
            <div className='about-top-bottom'>
              <div className='about-section01'>
                <p className='text-animation animation-delay-100 pt-2'>
                  Hi!,I am Sidath Dabare, a driven and enthusiastic junior full
                  stack developer based in Padova, Italy. With a strong passion
                  for technology, I am committed to delivering top-quality web
                  applications. My expertise in both front-end and back-end
                  development allows me to create dynamic, user-friendly
                  websites that are not only functional but also visually
                  stunning. Whether working on a challenging project or
                  collaborating with a team, I am dedicated to finding the best
                  solutions and bringing my ideas to life.
                </p>
              </div>
              <div className='about-section02'>
                <p
                  className='resume text-animation animation-delay-200 pt-2'
                  onClick={() => downloadFile(RESUME_PDF)}>
                  <span>RESUME</span>
                  <span
                    className={
                      !themeColor
                        ? "bottom-line dark mt-1"
                        : "bottom-line light mt-1"
                    }></span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
