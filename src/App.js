/** @format */

import { createContext, useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import MyNavbar from "./components/MyNavbar"
import Preloader from "./components/Preloader"

export const ThemeContext = createContext(null)

function App() {
  const [theme, setTheme] = useState(false)
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
        <ThemeContext.Provider value={{ theme }}>
          <div className={theme ? "App light" : "App dark"}>
            <BrowserRouter>
              <MyNavbar theme={theme} setTheme={setTheme} />
              <Routes>
                <Route
                  path='/'
                  element={<Home theme={theme} setTheme={setTheme} />}
                />
                <Route path='/profile' element={<Profile />} />
              </Routes>
            </BrowserRouter>
          </div>
        </ThemeContext.Provider>
      )}
    </>
  )
}

export default App
