/** @format */

import React from "react"
import { useSelector } from "react-redux"
import MyPic from "../Images/my-pic.png"
import "./About.css"
import { useNavigate } from "react-router-dom"

const About = () => {
  const themeColor = useSelector((state) => state.setColor.selectedColor)
  const navigate = useNavigate()
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("/public/resume.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob)
        // Setting various property values
        let alink = document.createElement("a")
        alink.href = fileURL
        alink.download = "resume.pdf"
        alink.click()
      })
    })
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
                <a
                  href='/src/Images/logo-bg.jpg'
                  download
                  // rel='noopener noreferrer'
                  // target='_blank'
                  // onClick={onButtonClick}
                  className='resume text-animation animation-delay-200 pt-2'>
                  <span>RESUME</span>
                  <span
                    className={
                      !themeColor
                        ? "bottom-line dark mt-1"
                        : "bottom-line light mt-1"
                    }></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
