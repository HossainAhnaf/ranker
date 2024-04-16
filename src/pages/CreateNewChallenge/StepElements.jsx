//modules
import React, { useEffect,useRef } from 'react'
//components
import OutlinedCustomField from '../../components/OutlinedCustomField'
import Select from '../../components/Select'
import ChallengeCard from '../../components/ChallengeCard'

export function StepElementOne({title,addDiscription,description,updateFields}) {
   const stepElement = useRef(null)
  useEffect(() => {
    stepElement.current.classList.add('active')
 }, [])

  return (
    <div className="step-element" ref={stepElement}>
      <OutlinedCustomField className="title-field" placeholder="Title" >
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

    </div>
  )
}
export function StepElementTwo({difficulty,  pinned,addDueDate, updateFields}) {
  const stepElement = useRef(null)
  useEffect(() => {
    stepElement.current.classList.add('active')
 }, [])

 return (
<div className="step-element" ref={stepElement}>
{
  addDueDate
    ? <>
      <OutlinedCustomField className="title" placeholder="date" >
        <input type="date" placeholder=" " />
      </OutlinedCustomField>
      <button className="add-remove-button" onClick={() => updateFields({addDueDate:false})}>Remove -</button>
    </>
    : <button className="add-remove-button" onClick={() => updateFields({addDueDate:true})}>Add due date +</button>
}
<div className="difficulty-label flex-rw ">
  <span className="name">Difficulty</span>
  <Select onChange={(value)=>updateFields({difficulty:value})}>
    <span datavalue="easy" dataselectedclassnames="easy" className={`option easy ${difficulty === "easy" ? 'selected':''}`}>Easy</span>
    <span datavalue="medium" dataselectedclassnames="medium" className={`option medium ${difficulty === "medium" ? 'selected':''}`}>Medium</span>
    <span datavalue="hard" dataselectedclassnames="hard" className={`option hard ${difficulty === "hard" ? 'selected':''}`}>Hard</span>
    <span datavalue="crazy" dataselectedclassnames="crazy" className={`option crazy ${difficulty === "crazy" ? 'selected':''}`}>Crazy</span>
  </Select>
</div>
<div className="pinned-field flex-rw ">
  <label htmlFor="pinned">Pinned</label>
  <div className="switch-wrapper">
    <label className="switch-small">
      <input id="pinned" type="checkbox" onChange={(e) => updateFields({pinned:e.target.checked})} checked={pinned} />
      <span className="slider "></span>
    </label>
  </div>
</div>

</div>
 )
}

export function StepElementThree({title, description, difficulty, pinned, previous, postChallengeData}) {
  const stepElement = useRef(null)
  useEffect(() => {
    stepElement.current.classList.add('active')
 }, [])

 return (
<div className="step-element" ref={stepElement}>
<div className="result flex-cm center ">
  <small className="title">By pressing 'Create' your challenge will be ready </small>
  <ChallengeCard title={title} description={description} difficulty={difficulty} pinned={pinned} id={5} />
</div>

</div>
  )
}