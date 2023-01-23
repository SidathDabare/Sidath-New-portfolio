/** @format */

import React, { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import "../components/MyNavbar.css"
import LOGO from "../Images/logo.png"
import DarkModeIcon from "@mui/icons-material/DarkMode"
import LightModeIcon from "@mui/icons-material/LightMode"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import GitHubIcon from "@mui/icons-material/GitHub"
import LocalPhoneIcon from "@mui/icons-material/LocalPhone"
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail"

const MyNavbar = (props) => {
  console.log(props)

  const [navColor, setNavColor] = useState(false)
  const [toggleBtn, setToggleBtn] = useState(false)

  const changeNavBg = () => {
    // console.log(window.scrollY)
    // if (window.scrollY >= 60) {
    // window.scrollTo({
    //   top: 0,
    //   behavior: "smooth",
    // })
    if (window.pageYOffset > 100) {
      setNavColor(true)
    } else {
      setNavColor(false)
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", changeNavBg)
    return () => window.removeEventListener("scroll", changeNavBg)
  }, [])

  return (
    <div className={navColor ? "navbar-main-active" : "navbar-main"}>
      <Container className='navbar-div'>
        <div className='logo-div'>
          <img className='logo' alt='logo' src={LOGO} />
        </div>
        <div
          className={
            toggleBtn
              ? "toggle-btn toggle-animation toggle-animation02"
              : "toggle-btn"
          }
          onClick={() => setToggleBtn(!toggleBtn)}>
          <div
            className={
              toggleBtn ? "line01 remove-margin bg-hover" : "line01"
            }></div>
          <div
            className={
              toggleBtn ? "line02 line02-animation bg-hover" : "line02"
            }></div>
          <div
            className={
              toggleBtn
                ? "line03 remove-margin line03-animation bg-hover"
                : "line03"
            }></div>
        </div>
      </Container>
      <div className={toggleBtn ? "menu-div" : "menu-div-hide"}>
        <Container
          className={
            !props.theme
              ? "dark menu-div-container "
              : "light menu-div-container "
          }>
          <div className='action-div'>
            {props.theme ? (
              <div className='switch-colors'>
                <small>DARK MOOD</small>
                <DarkModeIcon
                  className='d-inline-flex align-items-center icon-size mx-2'
                  onClick={() => {
                    props.setTheme(!props.theme)
                    setToggleBtn(false)
                  }}
                />
              </div>
            ) : (
              <div className='switch-colors'>
                <small>LIGHT MOOD</small>
                <LightModeIcon
                  className='d-inline-flex align-items-center icon-size mx-2'
                  onClick={() => {
                    props.setTheme(!props.theme)
                    setToggleBtn(false)
                  }}
                />
              </div>
            )}
          </div>
          <div className='menu-content-div'>
            <div className='menu-div-content'>
              <li className={toggleBtn ? "nav-menu-links" : ""}>
                HOME<span className='small-line'></span>
              </li>
              <li className={toggleBtn ? "nav-menu-links" : ""}>
                PROJECTS<span className='small-line'></span>
              </li>
              <li className={toggleBtn ? "nav-menu-links" : ""}>
                ABOUT<span className='small-line'></span>
              </li>
              <li className={toggleBtn ? "nav-menu-links" : ""}>
                CONTACT<span className='small-line'></span>
              </li>
            </div>
            <div className={toggleBtn ? "menu-div-content-info" : ""}>
              <div>
                <h4 className='mb-2'>Sidath Dabare</h4>
                <small className='mb-0'>Full stack developer</small>
                <br></br>
                <small>Padova / Italy</small>
              </div>
              <div className='py-2'>
                <LinkedInIcon />
                <GitHubIcon className='mx-2' />
              </div>
              <div className='py-2'>
                <p className='mb-0'>
                  <span className='font-weight-bold'>
                    <LocalPhoneIcon className='font-sm mr-2' />{" "}
                  </span>
                  <span>+39 3293758341</span>
                </p>
                <p>
                  <span className='font-weight-bold'>
                    <AlternateEmailIcon className='font-sm mr-2' />{" "}
                  </span>
                  <span>sidath2007@gmail.com</span>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default MyNavbar
