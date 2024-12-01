import { Route, Routes } from "react-router"
import Home from "./components/home/Home"
import TopElement from "./components/topElement/TopElement"
import Main from "./components/main/Main"
import Contact from "./components/contact/Contact"
import Resume from "./components/resume/Resume"
import Portfolio from "./components/portfolio/Portfolio"
import Certificates from "./components/certificates/Certificates"
import { ThemeProvider } from "./components/context/themeContext/ThemeContext"
import { LanguageProvider } from "./components/context/languageContext/LanguageContext"


function App() {


  return (
    <>
      <LanguageProvider>
        <ThemeProvider>
          <div className="bg-homeBg dark:bg-homeTwoBg-dark min-h-screen bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full">
            <TopElement />
            <Main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/awards" element={<Certificates />} />
              </Routes>
            </Main>
          </div>
        </ThemeProvider>
      </LanguageProvider>
    </>
  )
}

export default App
