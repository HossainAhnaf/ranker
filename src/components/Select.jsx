import React, { Children, useEffect, useRef, useState } from 'react'

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
    <div className={`select ${isActive ? 'active' : ''} ${className}`} >
      <span className="selected-option" onClick={showSelectOptions}>{selectedOptionText}</span>
      <div className="options-wrapper" ref={optionsWrapperRef} tabIndex="0" onBlur={hideSelectOptions}>
        {Children.map(children, (child) => {
          return child
        })}
      </div>
    </div>
  )
}

