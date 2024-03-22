import React from 'react'
//css
import '../assets/css/text-field.css'
function TextField({fieldType,required,placeholder,type,maxLength}) {
  return (
    <div class="text-field">
    {    
     fieldType === "input" ?
     <input type={type} maxLength={maxLength} required={required} />
    : <textarea required={required} maxLength={maxLength} ></textarea>
    }
    <label>{placeholder}</label>
  </div>
  )
}

export default TextField
