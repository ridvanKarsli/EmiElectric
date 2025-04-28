"use client"
import {
  Box,
} from "@mui/material"

import HeroSection from "../components/home/HeroSection"
import FeaturesSection from "../components/home/FeaturesSection"
import ContactForm from "../components/home/ContactForm"
import About from "../components/home/About"

const Home = () => {


  return (
    <Box>            
      <HeroSection />
      <About />
      <FeaturesSection />
      <ContactForm />
    </Box>
  )
}

export default Home
