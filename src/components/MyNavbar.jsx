/** @format */

import React, { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import "../components/MyNavbar.css"
import LOGO from "../Images/logo.png"
import LOGODARK from "../Images/logo-dark.png"
import DarkModeIcon from "@mui/icons-material/DarkMode"
import LightModeIcon from "@mui/icons-material/LightMode"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setColor } from "../redux/action"

const MyNavbar = (props) => {
  const themeColor = useSelector((state) => state.setColor.selectedColor)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [theme, setTheme] = useState(false)
  // const [navColor, setNavColor] = useState(false)
  const [toggleBtn, setToggleBtn] = useState(false)

  // const changeNavBg = () => {
  //   if (window.pageYOffset > 100) {
  //     setNavColor(true)
  //   } else {
  //     setNavColor(false)
  //   }
  // }
  const setColorTheme = () => {
    dispatch(setColor(theme))
  }
  useEffect(() => {
    // window.addEventListener("scroll", changeNavBg)
    // return () => window.removeEventListener("scroll", changeNavBg)
  }, [])

  return (
    // <div className={navColor ? "navbar-main-active" : "navbar-main"}>
    <div className='navbar-main'>
      <Container className='navbar-div'>
        <div className='logo-div' onClick={() => navigate("/")}>
          {!themeColor ? (
            <img className='logo' alt='logo' src={LOGODARK} />
          ) : (
            <img className='logo' alt='logo' src={LOGO} />
          )}
        </div>
        <div className='action-div'>
          {!themeColor ? (
            <div className='switch-colors light'>
              {/* <small>DARK MOOD</small> */}
              <DarkModeIcon
                className='d-inline-flex align-items-center icon-size mx-2'
                onClick={() => {
                  setTheme(!theme)
                  setColorTheme()
                  // setToggleBtn(false)
                }}
              />
            </div>
          ) : (
            <div className='switch-colors dark'>
              {/* <small>LIGHT MOOD</small> */}
              <LightModeIcon
                className='d-inline-flex align-items-center icon-size mx-2'
                onClick={() => {
                  setTheme(!theme)
                  setColorTheme()
                  // setToggleBtn(false)
                }}
              />
            </div>
          )}
        </div>
        <div
          className={
            toggleBtn
              ? "toggle-btn toggle-animation toggle-animation02"
              : "toggle-btn"
          }
          onClick={() => setToggleBtn(!toggleBtn)}>
          {!themeColor ? (
            <>
              {" "}
              <div
                className={
                  toggleBtn
                    ? "line01 remove-margin bg-hover dark"
                    : "line01 dark "
                }></div>
              <div
                className={
                  toggleBtn
                    ? "line02 line02-animation bg-hover dark"
                    : "line02 dark"
                }></div>
              <div
                className={
                  toggleBtn
                    ? "line03 remove-margin line03-animation bg-hover dark"
                    : "line03 dark"
                }></div>
            </>
          ) : (
            <>
              {" "}
              <div
                className={
                  toggleBtn
                    ? "line01 remove-margin bg-hover light"
                    : "line01 light"
                }></div>
              <div
                className={
                  toggleBtn
                    ? "line02 line02-animation bg-hover light"
                    : "line02 light"
                }></div>
              <div
                className={
                  toggleBtn
                    ? "line03 remove-margin line03-animation bg-hover light"
                    : "line03 light"
                }></div>
            </>
          )}
        </div>
      </Container>
      <div className={toggleBtn ? "menu-div" : "menu-div-hide"}>
        <div
          className={
            themeColor ? "dark menu-div-container" : "light menu-div-container"
          }>
          <Container className='menu-content-div'>
            <div className='menu-div-content'>
              <li
                className={
                  toggleBtn ? "nav-menu-links" : "nav-menu-links-reverse"
                }
                onClick={() => {
                  navigate("/")
                  setToggleBtn(false)
                }}>
                HOME
                <span
                  className={
                    !themeColor ? "small-line dark" : " small-line light"
                  }></span>
              </li>
              <li
                className={
                  toggleBtn ? "nav-menu-links" : "nav-menu-links-reverse"
                }
                onClick={() => {
                  navigate("/work1")
                  setToggleBtn(false)
                }}>
                WORK
                <span
                  className={
                    !themeColor ? "small-line dark" : " small-line light"
                  }></span>
              </li>
              <li
                className={
                  toggleBtn ? "nav-menu-links" : "nav-menu-links-reverse"
                }
                onClick={() => {
                  navigate("/about")
                  setToggleBtn(false)
                }}>
                ABOUT
                <span
                  className={
                    !themeColor ? "small-line dark" : " small-line light"
                  }></span>
              </li>
              <li
                className={
                  toggleBtn ? "nav-menu-links" : "nav-menu-links-reverse"
                }
                onClick={() => {
                  navigate("/contact")
                  setToggleBtn(false)
                }}>
                CONTACT
                <span
                  className={
                    !themeColor ? "small-line dark" : " small-line light"
                  }></span>
              </li>
            </div>
            <div
              className={
                toggleBtn
                  ? "menu-div-content-social-links"
                  : "nav-menu-links-reverse"
              }>
              <div
                className='d-flex align-item-center'
                onClick={() => {
                  window.open("https://github.com/SidathDabare", "_blank")
                  setToggleBtn(false)
                }}>
                <GitHubIcon className='icon-size-big mr-3 ' />
                <small className=''> Git Hub</small>
                <span
                  className={
                    !themeColor
                      ? "bottom-line-div dark"
                      : "bottom-line-div light"
                  }></span>
              </div>
              <div
                className='d-flex align-item-center'
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/sidath-dabare-591063b8/",
                    "_blank"
                  )
                  setToggleBtn(false)
                }}>
                <LinkedInIcon className='icon-size-big mr-3 ' />
                <small className=''> LinkedIn</small>
                <span
                  className={
                    !themeColor
                      ? "bottom-line-div dark"
                      : "bottom-line-div light"
                  }></span>
              </div>
            </div>
            {/* <div className={toggleBtn ? "menu-div-content-info" : ""}>
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
            </div> */}
          </Container>
        </div>
      </div>
    </div>
  )
}

export default MyNavbar
