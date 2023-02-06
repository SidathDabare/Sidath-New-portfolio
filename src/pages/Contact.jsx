/** @format */

import React from "react"
import { Container } from "react-bootstrap"
import { useSelector } from "react-redux"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import "./Contact.css"

const Contact = () => {
  const themeColor = useSelector((state) => state.setColor.selectedColor)

  return (
    <div className={themeColor ? "dark" : "light"}>
      <Container className='contact-div'>
        <div className='contact-div-content'>
          <div className='contact-top-div text-animation'>
            <h1 className='text-animation animation-delay-300'>CONTACT</h1>
          </div>
          <div className='contact-bottom-div text-animation animation-delay-100'>
            <div className='contact-bottom-left'>
              <div>
                <p className='mail-text'>MAIL</p>
              </div>
              <div>
                <p className='mail-email'>
                  <a href='mailto:sidath2007@gmail.com'>
                    {" "}
                    sidath2007@gmail.com
                  </a>
                  <span
                    className={
                      !themeColor ? "bottom-line dark" : "bottom-line light"
                    }></span>
                </p>
              </div>
            </div>
            <div className='contact-bottom-right'>
              <div className='social-media'>
                <p className='social-text'>SOCIAL MEDIA</p>
              </div>
              <div className='social-media-links'>
                <p
                  className='social-link'
                  onClick={() => {
                    window.open("https://github.com/SidathDabare", "_blank")
                  }}>
                  <span className='d-flex align-items-center'>
                    <GitHubIcon className='icon-size-big mr-3' />
                    <span className='mx-2'> Git Hub</span>
                  </span>
                  <span
                    className={
                      !themeColor ? "bottom-line dark" : "bottom-line light"
                    }></span>
                </p>
                <p
                  className='social-link'
                  onClick={() => {
                    window.open(
                      "https://www.linkedin.com/in/sidath-dabare-591063b8/",
                      "_blank"
                    )
                  }}>
                  <span className='d-flex align-items-center'>
                    <LinkedInIcon className='icon-size-big mr-3 ' />
                    <span className='mx-2'> LinkedIn</span>
                  </span>
                  <span
                    className={
                      !themeColor ? "bottom-line dark" : "bottom-line light"
                    }></span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Contact
