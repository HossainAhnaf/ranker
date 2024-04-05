//modules & hooks
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation'
//img
import homeBgImage from '../assets/img/home-bg-image.jpg'
//css
import '../assets/css/home.css'
//css
import '../assets/css/mobile-large/home.css'
function Home() {
 
  return (
    <div className='home' style={{ backgroundImage: `url(${homeBgImage})` }}>
      <div className="bg-image-wrapper">
        <img src={homeBgImage} />
      </div>
     <div className="intro-wrapper">
      <div className="intro">
        <h1 className="title">Achieve Your Goals, Level Up Your Life</h1>

        <p className="description">
          <TypeAnimation
            sequence={[
              `${import.meta.env.VITE_APP_NAME} is your personal guide to self-improvement, empowering you to set and conquer challenges that shape your life.`,
              1000,
              "Earn experience points (XP) as you complete tasks, advance through levels, and unlock new achievements.",
              1000,
              "Whether you're aiming for personal milestones or seeking inspiration from others, Ranker is your best companion.",
              2000
            ]}
            speed={50}
            deletionSpeed={70}
            repeat={Infinity}
          />
        </p>
        <button className="signup-button positive button flex-rw center">
          <Link to='/signup'>Start Your Journey</Link>
          <span className="chevron right"></span>
        </button>
      </div>
      </div>

    </div>
  )
}

export default Home
