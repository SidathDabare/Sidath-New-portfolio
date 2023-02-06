/** @format */

import React, { useEffect, useRef } from "react"
import "./ThreeDModel.css"
import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

const ThreeDModel = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    // Create a Three.js scene
    const scene = new THREE.Scene()

    // Create a Three.js camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 5

    // Create a Three.js renderer
    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)

    // Append the renderer to the container element
    containerRef.current.appendChild(renderer.domElement)

    // Load a GLTF model
    const loader = new GLTFLoader()
    loader.load("../../public/room_relaxing_copy.gltf", (gltf) => {
      scene.add(gltf.scene)

      // Animate the scene
      const animate = () => {
        requestAnimationFrame(animate)
        renderer.render(scene, camera)
      }
      animate()
    })
  }, [])

  return <div className='three-model-div' ref={containerRef} />
}

export default ThreeDModel
