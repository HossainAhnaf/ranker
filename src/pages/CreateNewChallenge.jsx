//modules
import React from 'react'
//components
import Select from '../components/Select'

//css
import '../assets/css/create-new-challenge.css'
import TextField from '../components/TextField'

function CreateNewChallenge() {
  return (
    
<section className="create-new-challenge-form-wrapper">
<form className="flex-cm center">
<div className="group-1 flex-cm center ">

<div className="title-field flex-rw center">
<label for="title">Title:</label>
  <input id="title" type="text" placeholder=' '/>
</div>


{/* <TextField chassName="description-field" fieldType="textarea" required={true} placeholder="description" maxLength="50"/> */}
<div class="description-field">
  <label for="description">Description:</label>
  <textarea id="description" placeholder="Enter your description here..." rows="7"></textarea>
</div>



<div className="due-date-field flex-rw">
<label for="due-date">Due date(optional)
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
<label for="pinned">Pinned</label>
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

