/** @format */

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Container } from "react-bootstrap"

const Sample = () => {
  const [rotate, setRotate] = useState(false)
  const [move, setMove] = useState(false)
  return (
    //  transition={{ delay: 1 }}
    //  animate={{ rotate: rotate ? 360 : 0 }}
    //  animate={{ rotate:[0,200,200,0] }}
    //  transition={{ type: "spring", bounce: 1 }}
    //  transition={{ type: "inertia", velocity: 40 }}
    //  animate={{ x: move ? 200 : -200 }}
    //  transition={{ type: "inertia", velocity: 40 }}
    //  whileHover={{ scale: 1.5 }}
    <div>
      <Container>
        <motion.div
          style={{
            height: "100px",
            width: "100px",
            background: "red",
          }}
          drag
          whileDrag={{ scale: 2 }}
          onClick={() => setMove(!move)}></motion.div>
      </Container>
    </div>
  )
}

export default Sample
