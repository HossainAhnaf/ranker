//modules
import React from 'react'
//components
import OutlinedCustomField from '../../components/OutlinedCustomField'
import Select from '../../components/Select'
import ChallengeCard from '../../components/ChallengeCard'

export function StepElementOne({title,addDiscription,description,updateFields}) {

  return (
    <div className="step-element current">
      <OutlinedCustomField className="title-field" placeholder="Title">
        <input type="text" placeholder=" " maxLength={20} onChange={(e) => updateFields({title:e.target.value})} value={title}/>
      </OutlinedCustomField>
      {
        addDiscription
          ? <>
            <OutlinedCustomField className="description-field" placeholder="Description"  >
              <textarea placeholder=" " maxLength={200} rows={4} onChange={(e) => updateFields({description:e.target.value})} value={description}></textarea>
            </OutlinedCustomField>
            <button className="add-remove-button" onClick={() =>{ updateFields({addDiscription:false}); updateFields({description:''})}}>Remove -</button>
          </>
          : <button className="add-remove-button" onClick={()=>updateFields({addDiscription:true})}>Add description +</button>
      }
       <div className="button-wrapper flex-rw">
        <button className="button positive" onClick={"next"}>Next</button>
      </div>
    </div>
  )
}
export function StepElementTwo({difficulty, setDifficulty, pinned, setPinned,addDueDate, setAddDueDate,previous, next}) {
 return (
<div className="step-element next">
{
  addDueDate
    ? <>
      <OutlinedCustomField className="title" placeholder="date" >
        <input type="date" placeholder=" " />
      </OutlinedCustomField>
      <button className="add-remove-button" onClick={() => setAddDueDate(false)}>Remove -</button>
    </>
    : <button className="add-remove-button" onClick={() => setAddDueDate(true)}>Add due date +</button>
}
<div className="difficulty-label flex-rw ">
  <span className="name">Difficulty</span>
  <Select onChange={setDifficulty}>
    <span datavalue="easy" dataselectedclassnames="easy" className="option selected easy">Easy</span>
    <span datavalue="medium" dataselectedclassnames="medium" className="option medium">Medium</span>
    <span datavalue="hard" dataselectedclassnames="hard" className="option hard">Hard</span>
    <span datavalue="crazy" dataselectedclassnames="crazy" className="option crazy">Crazy</span>
  </Select>
</div>
<div className="pinned-field flex-rw ">
  <label htmlFor="pinned">Pinned</label>
  <div className="switch-wrapper">
    <label className="switch-small">
      <input id="pinned" type="checkbox" onChange={(e) => setPinned(e.target.checked)} checked={pinned} />
      <span className="slider "></span>
    </label>
  </div>
</div>
<div className="button-wrapper flex-rw">
   <button className="button negitive" onClick={previous}>Previous</button>
   <button className="button positive" onClick={next}>Next</button>
</div>
</div>
 )
}

export function StepElementThree({title, description, difficulty, pinned, previous, postChallengeData}) {

  return (
<div className="step-element next">
<div className="result flex-cm center ">
  <small className="title">By pressing 'Create' your challenge will be ready </small>
  <ChallengeCard title={title} description={description} difficulty={difficulty} pinned={pinned} id={5} />
</div>
<div className="button-wrapper flex-rw">
<button className="button negitive" onClick={previous}>Previous</button>
 <button className="button positive" type="submit" onClick={postChallengeData} >Create</button>
</div>
</div>
  )
}