import React from 'react'
//css
import '../assets/css/outlined-custom-field.css'
function OutlinedCustomField({ className,placeholder,children }) {
  
  return (
    <div className={`outlined-custom-field ${className}`}>
      {
      children
      
      }
      <label className={children.type === 'input' ? 'input-label' : 'textarea-label'} >{placeholder}</label>
    </div>
  )
}

export default OutlinedCustomField
