"use client"
import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
// import {
//   FaRocket, FaBriefcase, FaBrain, FaUserGraduate,
//   FaCode, FaCloud, FaLaptop, FaChartLine,
//   FaCogs, FaComments, FaLightbulb, FaProjectDiagram
// } from "react-icons/fa"
import Link from "next/link" 
import { Button } from "./button"
import Icon from "./icon1"
import Icon2 from "./icon2" // Assuming you have an icon component
import Icon3 from "./icon3" // Assuming you have an icon component
import Icon4 from "./icon4" // Assuming you have an icon component
import Icon5 from "./icon5" // Assuming you have an icon component
import Icon6 from "./icon6" // Assuming you have an icon component
import Icon7 from "./icon7" // Assuming you have an icon component
import Icon8 from "./icon8" // Assuming you have an icon component
import Icon9 from "./icon9" // Assuming you have an icon component
// import Icon10 from "./icon10" // Assuming you have an icon component
// import Icon11 from "./icon11" // Assuming you have an icon component
// import Icon12 from "./icon12" // Assuming you have an icon component


gsap.registerPlugin(ScrollTrigger)

const HeroSection = () => {
  const animationRef = useRef(null)
  const ballRef = useRef(null)
  const iconsRef = useRef([])

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: animationRef.current,
        start: "top top",
        end: "+=200%",
        scrub: true,
        pin: true,
      },
    })

    // Light Ball appears and grows
    tl.fromTo(
      ballRef.current,
      { scale: 0, opacity: 0 },
      { scale: 4, opacity: 0.6, duration: 1, ease: "power2.out" }
    )

    const radius = 400
    const count = iconsRef.current.length

    // Explode Icons in a circle
    tl.to(
      iconsRef.current,
      {
        opacity: 1,
        scale: 1.5,
        x: (i) => radius * Math.cos((i / count) * 2 * Math.PI),
        y: (i) => radius * Math.sin((i / count) * 2 * Math.PI),
        ease: "power4.out",
        duration: 2,
        stagger: {
          amount: 0.3,
          from: "random",
        },
      },
      ">-0.3"
    )

    // Continue flying across the screen
    tl.to(
      iconsRef.current,
      {
        x: (i) => 2000 * Math.cos((i / count) * 2 * Math.PI),
        y: (i) => 1000 * Math.sin((i / count) * 2 * Math.PI),
        scale: 2,
        duration: 2,
        ease: "power1.inOut",
      },
      "+=0.3"
    )

    // Optional: keep them visible (don't fade out)
  }, [])

  const icons = [
    // <FaRocket />, <FaBriefcase />, <FaBrain />, <FaUserGraduate />,
    // <FaCode />, <FaCloud />, <FaLaptop />, <FaChartLine />,
    // <FaCogs />, <FaComments />, <FaLightbulb />, <FaProjectDiagram />,
    <Icon/>, <Icon2/>, <Icon3/>, <Icon4/>, <Icon5/>, <Icon6/>, 
    <Icon7/>, <Icon8/>, <Icon9/>
  ]

  return (
    <section className="w-full bg-transparent text-white overflow-hidden ">
      {/* 👇 Background Animation Section */}
      <div
        ref={animationRef}
        className="relative h-screen w-full flex items-center justify-center z-0"
      >
        {/* Light Ball */}
        <div
          ref={ballRef}
          className="absolute left-1/2 top-1/2 w-20 h-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-pink-500 to-cyan-400 blur-xl"
        />

        {/* Exploding Icons */}
        {icons.map((icon, index) => (
          <div
            key={index}
            ref={(el) => (iconsRef.current[index] = el)}
            className="absolute left-1/2 top-1/2 text-white text-6xl opacity-0 scale-0 -translate-x-1/2 -translate-y-1/2"
          >
            {icon}
          </div>
        ))}

        {/* Hero Text Content */}
        <div className="relative z-10 text-center px-4 mt-10">
          <h1 className="text-6xl md:text-7xl font-semibold tracking-tight">
            Your AI Professor For <br />
            Professional Success
          </h1>
          <p className="font-light max-w-xl mx-auto mt-4">
            Advance your career with personalized guidance, interview prep, and AI-powered tools.
          </p>
          <div className="space-x-4 mt-6">
            <Link href="/dashboard">
              <Button size="lg" className="px-8">Get Started</Button>
            </Link>
            <Link href="/dashboard">
              <Button size="lg" className="px-8" variant="outline">Watch Demo</Button>
            </Link>
          </div>
        </div>
      </div>

    
    </section>
  )
}

export default HeroSection
