/** @format */

import React from "react"
import { Container } from "react-bootstrap"
import { useSelector } from "react-redux"
import "./Contact.css"

const Contact = () => {
  const themeColor = useSelector((state) => state.setColor.selectedColor)

  return (
    <div className={themeColor ? "dark" : "light"}>
      <Container className='contact-div'>
        <div className='contact-div-content'>
          <div className='contact-top-div'>
            <h1>CONTACT</h1>
          </div>
          <div className='contact-bottom-div'>
            <div className='contact-bottom-left'>
              <h5>MAIL</h5>
              <h5>sidath2007@gmail.com</h5>
            </div>
            <div className='contact-bottom-right'>
              <div className='social-media'>
                <h5>SOCIAL MEDIA</h5>
              </div>
              <div className='social-media-links'>
                <h5>GIT HUB</h5>
                <h5>LINKEDIN</h5>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Contact
