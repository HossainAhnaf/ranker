import React, {useEffect, useRef, useState } from 'react'
//components
import Icon from 'react-inlinesvg'
//svg
import dropDownSvg from '../assets/svg/drop-down.svg'
//css
import '../assets/css/select.css'
export default function Select({className,onChange, children }) {

  const optionsWrapperRef = useRef(null)
  const selectedOptionRef = useRef(null)

  const [isActive, setIsActive] = useState(false)
  const [selectedOptionText, setSelectedOptionText] = useState('')
  
  
  const showSelectOptions = () => {
      setIsActive(true)
  };

  const hideSelectOptions = () => {
    setTimeout(() => {
      setIsActive(false)
    }, 100);
  };
  const optionClickHandler = ({currentTarget})=>{
    selectedOptionRef.current.classList.remove('selected')
    currentTarget.classList.add('selected')
    selectedOptionRef.current = currentTarget
    setSelectedOptionText(currentTarget.textContent) 
    if (onChange)
    onChange(currentTarget.getAttribute('datavalue'))

    setIsActive(false)

  }
  useEffect(() => {
   selectedOptionRef.current = optionsWrapperRef.current.querySelector('.option.selected')
   setSelectedOptionText(selectedOptionRef.current.textContent)
   for (const option of optionsWrapperRef.current.querySelectorAll('.option'))
     option.addEventListener('click',optionClickHandler) 
  
  }, [optionsWrapperRef])

  useEffect(() => {
    if (isActive)
      optionsWrapperRef.current.focus()
    
  }, [isActive])
 
  return (
    <div className={`select ${isActive ? 'active' : ''} ${className ? className : ''}`} >
      <span className="selected-option flex-rw center" onClick={showSelectOptions}>
        <span>{selectedOptionText}</span>
         <span className="svgCont">
          <Icon src={dropDownSvg}/>
          </span>
        </span>
      <div className="options-wrapper" ref={optionsWrapperRef} tabIndex="0" onBlur={hideSelectOptions}>
        {children}
      </div>
    </div>

  )
}

