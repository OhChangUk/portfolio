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
        "theme" : "bg-orange-500",
        "hoverTheme" : "hover:bg-orange-600",
        "hover" : "hover:text-orange-300",
        "hoverBg" : "hover:bg-orange-200",
        "img" : "./../images/main.jpg"
    },
    "green":{
        "bg" : "bg-green-50",
        "mobileNav" : "bg-green-100",
        "buttonBg" : "bg-green-400",
        "theme" : "bg-green-500",
        "hoverTheme" : "hover:bg-green-600",
        "hover" : "hover:text-green-300",
        "hoverBg" : "hover:bg-green-200",
        "img" : "./../images/main1.jpg"
    },
    "blue":{
        "bg" : "bg-blue-50",
        "mobileNav" : "bg-blue-100",
        "buttonBg" : "bg-blue-400",
        "theme" : "bg-blue-500",
        "hoverTheme" : "hover:bg-blue-600",
        "hover" : "hover:text-blue-300",
        "hoverBg" : "hover:bg-blue-200",
        "img" : "./../images/main2.jpg"
    },
    "pink":{
      "bg" : "bg-pink-50",
      "mobileNav" : "bg-pink-100",
      "buttonBg" : "bg-pink-400",
      "theme" : "bg-pink-500",
      "hoverTheme" : "hover:bg-pink-600",
      "hover" : "hover:text-pink-300",
      "hoverBg" : "hover:bg-pink-200",
      "img" : "./../images/main3.jpg"
  }
}
  const buttons = [
      {name: "오렌지", theme: "orange"},
      {name: "그린", theme: "green"},
      {name: "블루", theme: "blue"},
      {name: "핑크", theme: "pink"}
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