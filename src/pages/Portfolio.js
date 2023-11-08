import React, { useRef, useState } from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import AboutMe from '../components/AboutMe'
import Skills from '../components/Skills'
import Project from '../components/Project'
import Footer from '../components/Footer'
import Scroll from '../components/Scroll'

function Portfolio() {
  const HeaderRef = useRef(null);
  const AboutRef = useRef(null);
  const SkillsRef = useRef(null);
  const ProjectRef = useRef(null);
  const [theme, setTheme] = useState("orange")

  const themeColor = {
    "orange":{
        "bg" : "bg-orange-50",
        "mobileNav" : "bg-orange-100",
        "buttonBg" : "bg-orange-400",
        "hover" : "hover:text-orange-300",
        "img" : "./../images/main.jpg"
    },
    "green":{
        "bg" : "bg-green-50",
        "mobileNav" : "bg-green-100",
        "buttonBg" : "bg-green-400",
        "hover" : "hover:text-green-300",
        "img" : "./../images/main1.jpg"
    },
    "blue":{
        "bg" : "bg-blue-50",
        "mobileNav" : "bg-blue-100",
        "buttonBg" : "bg-blue-400",
        "hover" : "hover:text-blue-300",
        "img" : "./../images/main2.jpg"
    }
}
  const buttons = [
      {name: "오렌지", theme: "orange"},
      {name: "그린", theme: "green"},
      {name: "블루", theme: "blue"}
  ]

  const scrollToComponent = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
        <Nav scrollToComponent={scrollToComponent} HeaderRef={HeaderRef} AboutRef={AboutRef} SkillsRef={SkillsRef} ProjectRef={ProjectRef} themeColor={themeColor} buttons={buttons} theme={theme} setTheme={setTheme}  />
        <Header themeColor={themeColor} theme={theme} />
        <AboutMe domRef={AboutRef} />
        <Skills domRef={SkillsRef} themeColor={themeColor} theme={theme} />
        <Project domRef={ProjectRef} themeColor={themeColor} theme={theme} />
        <Scroll themeColor={themeColor} theme={theme} />
        <Footer themeColor={themeColor} theme={theme} />
    </>
  )
}

export default Portfolio