//css
import '../assets/css/home.css'
//modules & hooks
import React, { useState, useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation'
//img
import homeBgImage from '../assets/img/home-bg-image.jpg'
function Home() {
  const [introDesc, setIntroDesc] = useState()
  useEffect(() => {
    // useWritingAnimation(introDesc,setIntroDesc)
  }, [])
  return (
    <div className='home'>
      <div className="bg-image-wrapper">
        <img src={homeBgImage} />
      </div>

      <div className="intro-title">
        <h1 className="title">Achieve Your Goals, Level Up Your Life</h1>
        <p className="description">
          {/* {introDesc} */}
          <TypeAnimation
            sequence={[
              `${import.meta.env.VITE_APP_NAME} is your personal guide to self-improvement, empowering you to set and conquer challenges that shape your life.`,
              1000,
              "Earn experience points (XP) as you complete tasks, advance through levels, and unlock new achievements.",
              1000,
              "Whether you're aiming for personal milestones or seeking inspiration from others, Ranker is your companion in the journey to becoming the best version of yourself. Join our community of goal-setters and start ranking up your life today!",
              2000
            ]}
            speed={50}
            deletionSpeed={70}
            repeat={Infinity}
          />
        </p>
        <button className="signup-button positive button flex-rw center">
          <p>Start Your Journey</p>
          <span className="chevron right"></span>
        </button>
      </div>

    </div>
  )
}

export default Home
