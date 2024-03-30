//modules
import React from 'react'
import {useSelector, useDispatch } from 'react-redux'
import { setTheme } from '../store/slices/themeSlice'
//components
import Select from '../components/Select'
import Icon from 'react-inlinesvg'
//svg
import moonSvg from '../assets/svg/moon.svg'
import fontSizeSvg from '../assets/svg/font-size.svg'
//css
import '../assets/css/display.css'
function Display() {
   
  const dispatch = useDispatch()
  const theme = useSelector((state)=>state.themeSlice.theme)
  return (
    <div className="display">
      <div className="preferences-wrapper">
      <div className="preference flex-rw ">
        <div className="indicators flex-rw center">
       <div className="svgCont">
         <Icon src={moonSvg}/>
       </div>
       <b className="name">Theme</b>
       </div>
       <Select onChange={(value)=>dispatch(setTheme(value))}>
         <span className={`option ${theme === 'theme-light' ? 'selected' : ''}`} datavalue="theme-light">Light</span>
         <span className={`option ${theme === 'theme-dark' ? 'selected' : ''}`} datavalue="theme-dark">Dark</span>
         <span className={`option ${theme === '' ? 'selected' : ''}`} datavalue="">System</span>
       </Select>

     </div>
     <div className="preference flex-rw ">
        <div className="indicators flex-rw center">
       <div className="svgCont">
         <Icon src={fontSizeSvg}/>
       </div>
       <b className="name">Font size</b>
       </div>
       <Select>
         <span className="option">Small</span>
         <span className="option selected">Normal</span>
         <span className="option">Large</span>
       </Select>

     </div>
   
      </div>
    
     
    </div>
  )

}

export default Display
