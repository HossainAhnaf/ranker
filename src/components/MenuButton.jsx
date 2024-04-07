//modules
import React , { useState,useEffect,useRef } from 'react'
//components
import Icon from 'react-inlinesvg'
//css
import '../assets/css/menu-button.css'
//svg
import dropDownSvg from '../assets/svg/drop-down.svg'
function MenuButton({children,label,optionsType,onChange}) {
  const menuOptionsWrapperRef = useRef(null)

  const [open, setOpen] = useState(false)

  const menuButtonClickHandler = ()=>{  
    if (!open)
    setOpen(true)
  }
  const menuOptionsBlurHandler = ({relatedTarget})=>{
    if(relatedTarget === null){
    setTimeout(()=>setOpen(false))
    }
  }
  const optionClickHandler = ({currentTarget})=>{
    if (optionsType === 'button-type'){
   menuOptionsWrapperRef.current.querySelector('.selected')?.classList.remove('selected')
   currentTarget.classList.add('selected')
   setOpen(false)  
  }
  } 

  useEffect(() => {
    menuOptionsWrapperRef.current.querySelectorAll('.option').forEach(option=>{
       option.addEventListener('click',optionClickHandler)
     })
  },[menuOptionsWrapperRef])
  useEffect(() => {
    if (open) 
     menuOptionsWrapperRef.current.focus()
  },[open])
  return (
    <div className={`menu-button-wrapper ${open ? 'open' : ''}`}>
    <div className="menu-button flex-rw center" onClick={menuButtonClickHandler}>
      <span>{label}</span>
      <span className="svgCont">
        <Icon src={dropDownSvg} />
      </span>
    </div>
    <div className={`menu-options-wrapper ${optionsType}`} ref={menuOptionsWrapperRef} tabIndex={0} onBlur={menuOptionsBlurHandler}>
      {children}
    </div>
  </div>
  )
}

export default MenuButton
