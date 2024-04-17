import React, { useEffect, useRef, useState } from 'react'
//components
import Icon from 'react-inlinesvg'
//svg
import dropDownSvg from '../assets/svg/drop-down.svg'
//css
import '../assets/css/select.css'
export default function Select({ className, onChange, children }) {
  
  const selectRef = useRef(null)
  const optionsWrapperRef = useRef(null)
  const [selectedOptionText, setSelectedOptionText] = useState('')
  const [selectedClassNames, setSelectedClassNames] = useState('')


  const hideSelectOptions = () => {
    selectRef.current.open = false
  };
  const optionClickHandler = ({currentTarget})=>{
    optionsWrapperRef.current.querySelector('.selected').classList.remove('selected')
    currentTarget.classList.add('selected')
    setSelectedOptionText(currentTarget.textContent)
    if (currentTarget.getAttribute('dataselectedclassnames')) 
      setSelectedClassNames(currentTarget.getAttribute('dataselectedclassnames'))
    if (onChange) onChange(currentTarget.getAttribute('datavalue'))
  }

  useEffect(() => {
   for (const option of optionsWrapperRef.current.querySelectorAll('.option')){
     option.addEventListener('click',optionClickHandler) 
     if (option.classList.contains('selected')) {
     setSelectedOptionText(option.textContent)
     setSelectedClassNames(option.getAttribute('dataselectedclassnames')) 
    }
   }
  }, [optionsWrapperRef])


  return (
    <>
    
      <details className={`select ${className}`} ref={selectRef}>
        <summary className={`${selectedClassNames ? selectedClassNames : ''} button flex-rw`} >
          {selectedOptionText}
          <span className="svgCont">
            <Icon src={dropDownSvg} />
          </span>
        </summary>
        <div className="options-wrapper flex-cm center"  ref={optionsWrapperRef} tabIndex="0" onClick={hideSelectOptions}>
          {children}
        </div>
      </details>
    </>

   

  )
}

Select.defaultProps = {
  className: ''
}