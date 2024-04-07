//modules
import React , { useState,useEffect,useRef } from 'react'
//components
import Icon from 'react-inlinesvg'
//css
import '../assets/css/menu-button.css'
//svg
import dropDownSvg from '../assets/svg/drop-down.svg'
function MenuButton({children,onChange}) {
  const menuOptionsRef = useRef(null)

  const [open, setOpen] = useState(false)

  const menuButtonClickHandler = ()=>{
      // if (!open) 
     setOpen(oldValue=>{
      console.log(oldValue);
      if (!oldValue) 
        return true
      // console.log(oldValue);
     })
  }
  const optionClickHandler = ({currentTarget})=>{
   menuOptionsRef.current.querySelector('.selected').classList.remove('selected')
   currentTarget.classList.add('selected')
  } 

  useEffect(() => {
    menuOptionsRef.current.querySelectorAll('.option').forEach(option=>{
       option.addEventListener('click',optionClickHandler)
     })
  },[menuOptionsRef])
  useEffect(() => {
    if (open) 
     menuOptionsRef.current.focus()
      // console.log(open);
  },[open])
  return (
    <div className={`menu-button-wrapper ${open ? 'open' : ''}`}>
    <div className="menu-button flex-rw center" onClick={menuButtonClickHandler}>
      <span>Difficulty</span>
      <span className="svgCont">
        <Icon src={dropDownSvg} />
      </span>
    </div>
    <div className="menu-options flex-cm " ref={menuOptionsRef} tabIndex={0} onBlur={()=>"setOpen(false)"}>
      {children}
    </div>
  </div>
  )
}

export default MenuButton
