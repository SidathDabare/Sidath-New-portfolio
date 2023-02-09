/** @format */

import React from "react"
import { Container } from "react-bootstrap"
import { useSelector } from "react-redux"
import data from "../data.json"
import "./Work1.css"
import OpenInNewIcon from "@mui/icons-material/OpenInNew"

const Work1 = () => {
  const themeColor = useSelector((state) => state.setColor.selectedColor)
  return (
    <div className={themeColor ? "dark" : "light"}>
      <Container className='work1-page-container'>
        {/* <div className='temp-text'>
          {" "}
          <h3>Projects will available soon..Thanks</h3>
        </div> */}
        <div className='work1-page-content'>
          {data.map((item, i) => (
            <div
              key={i}
              className='work1-page-content-item col-12 col-xs-6 col-md-6 col-lg-4'>
              <img className='work1-image' src={item.image} alt='' />
              <div className='work1-page-content-text'>
                <h2 className='work1-page-content-h2'>{item.title}</h2>
                <small className='work1-page-content-small'>{item.tec}</small>
                <small
                  className='work1-page-content-small-link'
                  onClick={() => window.open(item.link, "_blank")}>
                  <span>
                    {" "}
                    <OpenInNewIcon />
                  </span>
                  <span className='px-2 mt-1'>Go to Website</span>
                </small>
              </div>
              <div className='work1-page-content-overlay'></div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Work1
