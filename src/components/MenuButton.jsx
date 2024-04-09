//modules
import React , { useState,useEffect,useRef,useCallback } from 'react'
//components
import Icon from 'react-inlinesvg'
//css
import '../assets/css/menu-button.css'
//svg
import dropDownSvg from '../assets/svg/drop-down.svg'
function MenuButton({children,label,optionsType,onChange}) {
  const menuButtonRef = useRef(null)
  const menuOptionsWrapperRef = useRef(null)

  const [open, setOpen] = useState(false)


  const menuButtonClickHandler = useCallback(()=>{  
    setOpen(true)
    menuOptionsWrapperRef.current.addEventListener('blur',menuOptionsBlurHandler)
    menuButtonRef.current.removeEventListener('click',menuButtonClickHandler)     
  },[])
  const menuOptionsBlurHandler = useCallback(({relatedTarget})=>{
    if(relatedTarget === null){
    setOpen(false)
    setTimeout(() => {
    menuButtonRef.current.addEventListener('click',menuButtonClickHandler)
    }, 500);
    
    }
  },[])
  const optionClickHandler = ({currentTarget})=>{
    if (optionsType === 'button-type'){
   menuOptionsWrapperRef.current.querySelector('.selected')?.classList.remove('selected')
   currentTarget.classList.add('selected')
   setOpen(false)  
   if (onChange)
   onChange(currentTarget.getAttribute('datavalue'))
  }else{
    if (onChange)
    onChange(currentTarget.getAttribute('datatype'),currentTarget.getAttribute('datavalue'))
  }

  } 

  useEffect(() => {
    menuButtonRef.current.addEventListener('click',menuButtonClickHandler)
},[menuButtonRef])

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
    <div className="menu-button flex-rw" ref={menuButtonRef} >
      <span>{label}</span>
      <span className="svgCont">
        <Icon src={dropDownSvg} />
      </span>
    </div>
    <div className={`menu-options-wrapper ${optionsType}`} ref={menuOptionsWrapperRef} tabIndex={0} >
      {children}
    </div>
  </div>
  )
}

MenuButton.defaultProps = {
  optionsType: 'button-type'
}
export default MenuButton
