import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import PopupBanner from './components/PopupBanner'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import NdaCourse from './pages/NdaCourse'
import CdsCourse from './pages/CdsCourse'
import SsbCourse from './pages/SsbCourse'
import CscsCourse from './pages/CscsCourse'
import SportsPerformance from './pages/SportsPerformance'
import ProfessionalEducation from './pages/ProfessionalEducation'
import DefencePreparation from './pages/DefencePreparation'

function App() {
  return (
    <div className="app-shell">
      <ScrollToTop />
      <PopupBanner />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />

        {/* COURSES */}
        <Route path="/nda" element={<NdaCourse />} />
        <Route path="/nda-course" element={<NdaCourse />} />
        <Route path="/courses/nda" element={<NdaCourse />} />
        
        <Route path="/cds" element={<CdsCourse />} />
        <Route path="/cds-course" element={<CdsCourse />} />
        <Route path="/courses/cds" element={<CdsCourse />} />
        
        <Route path="/ssb" element={<SsbCourse />} />
        <Route path="/ssb-course" element={<SsbCourse />} />
        <Route path="/courses/ssb" element={<SsbCourse />} />

        <Route path="/cscs" element={<CscsCourse />} />
        <Route path="/cscs-course" element={<CscsCourse />} />
        <Route path="/cscs-eaam" element={<CscsCourse />} />
        <Route path="/cscs-eaam-course" element={<CscsCourse />} />
        <Route path="/courses/cscs" element={<CscsCourse />} />

        {/* SERVICES */}
        <Route path="/services" element={<SportsPerformance />} />
        <Route path="/services/sports-performance" element={<SportsPerformance />} />
        <Route path="/sports-performance" element={<SportsPerformance />} />

        <Route path="/services/professional-education" element={<ProfessionalEducation />} />
        <Route path="/professional-education" element={<ProfessionalEducation />} />

        <Route path="/services/defence-preparation" element={<DefencePreparation />} />
        <Route path="/defence-preparation" element={<DefencePreparation />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
