//modules
import React, { useEffect, useRef, useState } from 'react'
import useMultyStepForm from '../../hooks/useMultyStepForm'
//components
import { StepElementOne, StepElementTwo, StepElementThree } from './StepElements'
//css
import '../../assets/css/create-new-challenge.css'
import '../../assets/css/mobile-large/create-new-challenge.css'

function CreateNewChallenge() {
  const stepIndicatorWrapperRef = useRef(null)
  const tabsWrapperRef = useRef(null)


  const [data, setData] = useState({
    title: '',
    description: '',
    difficulty: 'easy',
    pinned: false,
    addDiscription: false,
    addDueDate: false
  })

  const updateFields = (fields) => {
    setData(prev => {
      return {
        ...prev,
        ...fields
      }
    })
  }

  const postChallengeData = (e) => {
    e.preventDefault()
    alert('data posted')
  }

  const { stepElement, nextStep, prevStep, currentStepIndex } = useMultyStepForm([
    <StepElementOne
      {...data}
      updateFields={updateFields}
    />,
    <StepElementTwo
      {...data}
      updateFields={updateFields}
    />,
    <StepElementThree
      {...data}
      updateFields={updateFields}
    />
  ])

  return (
    <section className="create-new-challenge-section flex-rw center">

      <form  >
        <div className="step-indicator flex-rw center" ref={stepIndicatorWrapperRef}>
          <div className={`step ${currentStepIndex === 0 ? 'current' : currentStepIndex > 0 ? "completed" : '' }`}></div>
          <div className={`step ${currentStepIndex === 1 ? 'current' : currentStepIndex > 1 ? "completed" : '' } `}></div>
          <div className={`step ${currentStepIndex === 2 ? 'current' : ''}`}></div>
        </div>
          {stepElement}
        <div className="button-wrapper flex-rw">
         {currentStepIndex > 0 && <button className="button negitive" onClick={prevStep}>Previous</button>}
         {currentStepIndex < 2 && <button className="button positive" onClick={nextStep}>Next</button>}
         {currentStepIndex === 2 && <button className="button positive" type="submit" onClick={postChallengeData} >Create</button>}
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