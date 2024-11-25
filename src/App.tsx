import { Route, Routes } from "react-router"
import Header from "./components/header/Header"
import Home from "./components/home/Home"


function App() {


  return (
    <>
      <div className="bg-homeBg dark:bg-homeTwoBg-dark min-h-screen bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full">

        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  )
}

export default App
