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
<div className="group-1 flex-cm center">

{/* <label className="custom-field title-field">
<input type="text" placeholder=" " maxLength="20" required />
<span className="placeholder">title</span>
</label> */}
 <TextField fieldType="input" required={true} placeholder="title" type="text" maxLength="2"/>


<label className="custom-field description-field">
<textarea placeholder=" " maxLength="300" required></textarea>
<span className="placeholder">description</span>
</label>
<label className="due-date-label flex-rw">
<span className="name">Due date(optional)
</span>
<input type="date" />

</label>


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

<div className="pinned-label flex-rw center">
<span className="name">Pinned</span>
<div className="switch-wrapper">
<label className="switch-small">
<input type="checkbox" />
<span className="slider"></span>
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

