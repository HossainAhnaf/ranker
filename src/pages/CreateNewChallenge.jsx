//modules
import React from 'react'
//components
import Select from '../components/Select'

//css
import '../assets/css/create-new-challenge.css'

function CreateNewChallenge() {
  return (
    
<section className="create-new-challenge-form-wrapper">
<form className="flex-cm center">
<div className="group-1 flex-cm center ">

<div className="title-field flex-rw center">
<label htmlFor="title">Title:</label>
  <input id="title" type="text" placeholder=' '/>
</div>


{/* <TextField chassName="description-field" fieldType="textarea" required={true} placeholder="description" maxLength="50"/> */}
<div className="description-field">
  <label htmlFor="description">Description:</label>
  <textarea id="description" placeholder="Enter your description here..." rows="7"></textarea>
</div>



<div className="due-date-field flex-rw">
<label htmlFor="due-date">Due date(optional)
</label>
<input id='due-date' type="date" />

</div>

</div>
<div className="group-2 flex-rw">
<div className="difficulty-label flex-rw center">
<span className="name">Difficulty</span>
<Select>
<span className="option selected easy">Easy</span>
<span className="option medium">Medium</span>
<span className="option hard">Hard</span>
</Select>
</div>

<div className="pinned-field flex-rw center">
<label htmlFor="pinned">Pinned</label>
<div className="switch-wrapper">
<label className="switch-small">
<input id="pinned" type="checkbox" />
<span className="slider "></span>
</label>
</div>
</div>

</div>

<button type="submit" className="button positive">Create</button>
</form>

</section>


  )
}

export default CreateNewChallenge

