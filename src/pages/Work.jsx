/** @format */

import React from "react"
import { useEffect } from "react"
import { Container } from "react-bootstrap"
import "./Work.css"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { selectedProject } from "../redux/action"
import data from "../data.json"
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import { useNavigate } from "react-router-dom"

const Work = () => {
  const themeColor = useSelector((state) => state.setColor.selectedColor)
  const selectedItem = useSelector(
    (state) => state.setProjectReducer.selectedProject
  )
  // console.log(selectedItem)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [image, setImage] = useState(false)
  const [display, setDisplay] = useState(false)
  console.log(display)

  useEffect(() => {}, [])
  return (
    <div className={themeColor ? "dark" : "light"}>
      <Container className='work-page-container'>
        <div className='work-page-left'>
          <div className='work-tittle'>
            <h1>Work</h1>
          </div>
          <div className='work-items-list'>
            {data &&
              data.map((item, i) => (
                <div
                  key={i}
                  className='work-item'
                  id='work-item'
                  onMouseOver={() => {
                    // setImage(item)
                    dispatch(selectedProject(item))
                  }}
                  onClick={() => {
                    navigate(`/works/${selectedItem.title}`)
                  }}>
                  <div className='d-flex align-items-center'>
                    <span>{i + 1}.</span>
                    <span className='work-item-title'>{item.title}</span>
                    <span
                      className={
                        !themeColor ? "line-center dark " : "line-center light"
                      }></span>
                    {/* <span className='down-arrow'>
                      <KeyboardArrowDownIcon
                        className={display ? "arrow-animation" : ""}
                        onClick={() => setDisplay(!display)}
                      />
                    </span> */}
                  </div>
                  <div>
                    <span>{item.technology}</span>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className='work-page-right'>
          <div className='work-image-div'>
            <img
              className='work-image'
              id='work-image-animation'
              src={selectedItem.image}
              alt=''
            />
          </div>
          <div className='work-image-div-overlay'>
            <div
              className='work-image-div-overlay-content'
              id='work-image-div-overlay-content'>
              <h3 className='text-truncate'>{selectedItem.title}</h3>
              <small className='text-truncate'>{selectedItem.technology}</small>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Work
