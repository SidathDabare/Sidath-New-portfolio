/** @format */

import React, { useEffect, useRef } from "react"
import "./MovingBg.css"
import { gsap } from "gsap"

const MovingBg = () => {
  const containerRef = useRef(null)
  const elementRefs = useRef([])
  useEffect(() => {
    const tl = gsap.timeline()

    function handleMouseMove(event) {
      const { clientX, clientY } = event
      const bounds = containerRef.current.getBoundingClientRect()
      const x = (clientX - bounds.left) / bounds.width - 0.5
      const y = (clientY - bounds.top) / bounds.height - 0.5

      tl.to(elementRefs.current[0], {
        x: x * 30,
        y: y * 30,
        ease: "power1.out",
      })

      tl.to(elementRefs.current[1], {
        x: x * 20,
        y: y * 20,
        ease: "power1.out",
      })
    }

    containerRef.current.addEventListener("mousemove", handleMouseMove)

    return () => {
      containerRef.current.removeEventListener("mousemove", handleMouseMove)
      tl.kill()
    }
  }, [])
  return (
    <div ref={containerRef} style={{ height: "500px", position: "relative" }}>
      <div
        ref={(ref) => (elementRefs.current[0] = ref)}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}>
        <h2>Element 1</h2>
        <p>This element moves more with the mouse.</p>
      </div>
      <div
        ref={(ref) => (elementRefs.current[1] = ref)}
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}>
        <h2>Element 2</h2>
        <p>This element moves less with the mouse.</p>
      </div>
    </div>
  )
}

export default MovingBg
