
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Properties from './pages/Properties'
import Home from './pages/Home'
import PropertiesDetails from './pages/PropertiesDetails'
import ContactUs from './pages/ContactUs'

import TopNavBar from './component/TopNavBar/TopNavBar'
import NavBarr from './component/NavBarr/NavBarr'
import Footer from './component/Footer/Footer'


function App() {

  return (
    <>
      <TopNavBar />
      <NavBarr />

      <Routes>
        <Route path="/Task3/" element= { <Home /> } />
        <Route path="/properties" element= { <Properties /> } />
        <Route path="/propertiesdetails" element= { <PropertiesDetails /> } />
        <Route path="/contactus" element= { <ContactUs /> } />
      </Routes>
      
      <Footer />

    </>
  )
}

export default App
