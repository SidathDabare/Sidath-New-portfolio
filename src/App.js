/** @format */

import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import MyNavbar from "./components/MyNavbar"
import Preloader from "./components/Preloader"
import Work from "./pages/Work"
import { useSelector } from "react-redux"
import WorkDisplay from "./pages/WorkDisplay"
import Contact from "./pages/Contact"
import About from "./pages/About"
import CustomCursor from "./components/CustomCursor"
import Work1 from "./pages/Work1"

// export const ThemeContext = createContext(null)

function App() {
  const themeColor = useSelector((state) => state.setColor.selectedColor)

  // const [theme, setTheme] = useState(false)
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 5000)
  }, [])
  return (
    <>
      {loader ? (
        <Preloader />
      ) : (
        <div className={themeColor ? "App light" : "App dark"}>
          <BrowserRouter>
            <CustomCursor />
            <MyNavbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/work' element={<Work />} />
              <Route path='/work1' element={<Work1 />} />
              <Route path='/about' element={<About />} />
              <Route path='/works/:name' element={<WorkDisplay />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
          </BrowserRouter>
        </div>
      )}
    </>
  )
}

export default App
