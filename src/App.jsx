import { ToastContainer } from "react-toastify"
import AboutS from "./components/sections/AboutS"
import ContactS from "./components/sections/ContactS"
import Footer from "./components/sections/Footer"
import Header from "./components/sections/Header"
import HomeS from "./components/sections/HomeS"
import ProjectS from "./components/sections/ProjectS"
import ServicesS from "./components/sections/ServicesS"
import StackTechS from "./components/sections/StackTechS"
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <>
      <Header/>
      <HomeS/>
      <AboutS/>
      <ServicesS/>
      <ProjectS/>
      <StackTechS/>
      <ContactS/>
      <Footer/>
      <ToastContainer />
    </>
  )
}

export default App