import React from 'react'
//css
import '../assets/css/text-field.css'
function TextField({ chassName, fieldType, required, placeholder, type, maxLength }) {
  return (
    <div class={`text-field ${chassName}`}>
      {
        fieldType === "input"
          ? <input type={type} maxLength={maxLength} required={required} />
          : <textarea required={required} maxLength={maxLength} ></textarea>
      }
      <label className='placeholder'>{placeholder}</label>
    </div>
  )
}

export default TextField
