//modules
import React , {useState} from 'react'
//components
import OutlinedCustomField from '../OutlinedCustomField'
function Form({title,value}) {
  const [currentValue, setCurrentValue] = useState(value)
  return (
    <div className="form flex-cm">
      <h1 className="title">{title}</h1>
      <OutlinedCustomField placeholder={title} >
        <input type="text" placeholder=" "  required={true}  onChange={({target})=>setCurrentValue(target.value)} value={currentValue}/>
      </OutlinedCustomField> 
      <small className="message">&nbsp; lollll</small>
      <button className="submit-button button positive">Save</button>
    </div>
  )
}

export default Form
