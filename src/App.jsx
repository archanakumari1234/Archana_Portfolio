import Banner from "./components/Banner"
import Contact from "./components/Contact"
import Features from "./components/Features"
import Footer from "./components/Footer"
import FooterBottom from "./components/FooterBottom"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Resume from "./components/Resume"

function App() {
  return (
    <div className="w-full min-w-full h-auto  bg-[#212428] mtext-[#c4cfde]">
    <div className="max-w-screen-xl mx-auto">
    <Navbar/>
    <Banner/>
    <Features/>
    <Projects/>
    <Resume/>
    <Contact/>
    <Footer/>
    <FooterBottom/>
    </div>
    </div>
  )
}

export default App
