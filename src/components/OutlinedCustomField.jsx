import React from 'react'
//css
import '../assets/css/outlined-custom-field.css'
function OutlinedCustomField({ chassName, required, placeholder, type, maxLength }) {
  return (
    <div className={`outlined-custom-field ${chassName}`}>
    <input placeholder=" "  type={type} maxLength={maxLength} required={required} />
      <label>{placeholder}</label>
    </div>
  )
}

export default OutlinedCustomField
