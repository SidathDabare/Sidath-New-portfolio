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
            <MyNavbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/work' element={<Work />} />
              <Route path='/profile' element={<Profile />} />
            </Routes>
          </BrowserRouter>
        </div>
      )}
    </>
  )
}

export default App
