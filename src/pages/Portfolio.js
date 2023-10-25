import React, { useRef } from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import AboutMe from '../components/AboutMe'
import Skills from '../components/Skills'
import Project from '../components/Project'

function Portfolio() {
  const HeaderRef = useRef(null);
  const AboutRef = useRef(null);
  const SkillsRef = useRef(null);
  const ProjectRef = useRef(null);

  const scrollToComponent = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
        <Nav scrollToComponent={scrollToComponent} HeaderRef={HeaderRef} AboutRef={AboutRef} SkillsRef={SkillsRef} ProjectRef={ProjectRef}  />
        <Header domRef={HeaderRef} />
        <AboutMe domRef={AboutRef} />
        <Skills domRef={SkillsRef} />
        <Project domRef={ProjectRef} />
    </>
  )
}

export default Portfolio