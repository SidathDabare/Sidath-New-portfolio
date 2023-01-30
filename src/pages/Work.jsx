/** @format */

import React from "react"
import { useEffect } from "react"
import { Container } from "react-bootstrap"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import "./Work.css"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { selectedProject } from "../redux/action"
import data from "../data.json"

const Work = (props) => {
  const themeColor = useSelector((state) => state.setColor.selectedColor)
  const selectedItem = useSelector(
    (state) => state.setProjectReducer.selectedProject
  )
  console.log(selectedItem)
  const dispatch = useDispatch()

  useEffect(() => {}, [props])
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
                  onMouseOver={() => {
                    dispatch(selectedProject(item))
                  }}>
                  <span>{item.title}</span>
                  <span
                    className={
                      !themeColor ? "line-center dark " : "line-center light"
                    }></span>
                </div>
              ))}
          </div>
        </div>
        <div className='work-page-right'>
          <div className='work-image-div'>
            <img className='work-image' src={selectedItem.image} alt='' />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Work
