//modules
import React, { useEffect, useRef, useState } from 'react'
import useMultyStepForm from '../../hooks/useMultyStepForm'
//components
import {StepElementOne, StepElementTwo, StepElementThree} from './StepElements'
//css
import '../../assets/css/create-new-challenge.css'
import '../../assets/css/mobile-large/create-new-challenge.css'

function CreateNewChallenge() {
  const stepIndicatorWrapperRef = useRef(null)
  const tabsWrapperRef = useRef(null)

  //data
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [difficulty, setDifficulty] = useState('easy')
  const [pinned, setPinned] = useState(false)
  //optional fields
  const [addDiscription, setAddDiscription] = useState(false)
  const [addDueDate, setAddDueDate] = useState(false)


  const postChallengeData = (e) => {
    e.preventDefault()
    alert('data posted')
  }
  useEffect(() => {

  }, [])

  const { stepElement, nextStep, prevStep } = useMultyStepForm([
    <StepElementOne
    title={title}
    setTitle={setTitle}
    addDiscription={addDiscription}
    setAddDiscription={setAddDiscription}
    description={description}
    setDescription={setDescription}
    next={"nextStep"}
  />,
  <StepElementTwo
    difficulty={difficulty}
    setDifficulty={setDifficulty}
    pinned={pinned}
    setPinned={setPinned}
    addDueDate={addDueDate}
    setAddDueDate={setAddDueDate}
    previous={"prevStep"}
    next={"nextStep"}
  />,
  <StepElementThree
    title={title}
    description={description}
    difficulty={difficulty}
    pinned={pinned}
    previous={"prevStep"}
    postChallengeData={postChallengeData}
  />
  ])
 

  return (
    <section className="create-new-challenge-section flex-rw center">

      <form  >
        <div className="step-indicator-wrapper flex-rw center" ref={stepIndicatorWrapperRef}>
          <div className="step current"></div>
          <div className="step next"></div>
          <div className="step next"></div>
        </div>
        <div className="step-elements-wrapper">
  {stepElement}
      
        </div>

      </form>

    </section>


  )
}

export default CreateNewChallenge




// <form className="flex-cm center">
// <div className="group-1 flex-cm center ">

// <div className="title-field flex-rw center">
// <label htmlFor="title">Title:</label>
//   <input id="title" type="text" placeholder=' '/>
// </div>


// <div className="description-field">
//   <label htmlFor="description">Description:</label>
//   <textarea id="description" placeholder="Enter your description here..." rows="7"></textarea>
// </div>



// <div className="due-date-field flex-rw">
// <label htmlFor="due-date">Due date(optional)
// </label>
// <input id='due-date' type="date" />

// </div>

// </div>
// <div className="group-2 flex-rw">
// <div className="difficulty-label flex-rw center">
// <span className="name">Difficulty</span>
// <Select>
// <span className="option selected easy">Easy</span>
// <span className="option medium">Medium</span>
// <span className="option hard">Hard</span>
// </Select>
// </div>

// <div className="pinned-field flex-rw center">
// <label htmlFor="pinned">Pinned</label>
// <div className="switch-wrapper">
// <label className="switch-small">
// <input id="pinned" type="checkbox" />
// <span className="slider "></span>
// </label>
// </div>
// </div>

// </div>

// <button type="submit" className="button positive">Create</button>
// </form>