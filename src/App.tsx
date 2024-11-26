import { Route, Routes } from "react-router"
import Home from "./components/home/Home"
import TopElement from "./components/topElement/TopElement"
import Main from "./components/main/Main"
import Contact from "./components/contact/Contact"


function App() {


  return (
    <>
      <div className="bg-homeBg dark:bg-homeTwoBg-dark min-h-screen bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full">

        <TopElement />
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Main>
      </div>
    </>
  )
}

export default App
