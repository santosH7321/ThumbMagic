import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import HomePages from "./pages/HomePages"
import Footer from "./components/Footer"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePages />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App