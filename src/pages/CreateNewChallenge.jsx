//modules
import React, { useRef, useState } from 'react'

//components
import OutlinedCustomField from '../components/OutlinedCustomField'
import Select from '../components/Select'

//css
import '../assets/css/create-new-challenge.css'

function CreateNewChallenge() {
  const stepIndicatorWrapperRef = useRef(null)
  const tabsWrapperRef = useRef(null)

  const [step, setStep] = useState(0)

  const [addDiscription, setAddDiscription] = useState(false)
  const [addDueDate, setAddDueDate] = useState(false)

  const [descriptionValue, setDescriptionValue] = useState('')
  const previous = (e) => {
    e.preventDefault()
    const currentStep = stepIndicatorWrapperRef.current.querySelector('.step.current')
    const previousStep = currentStep.previousElementSibling
    currentStep.className = currentStep.className.replace('current', 'next')
    previousStep.className = previousStep.className.replace('previous', 'current')

    const currentTab = tabsWrapperRef.current.querySelector('.tab.current')
    const previousTab = currentTab.previousElementSibling
    currentTab.className = currentTab.className.replace('current', 'next')
    previousTab.className = previousTab.className.replace('previous', 'current')
    setStep(step - 1)
  }
  const next = (e) => {
    e.preventDefault()
    const currentStep = stepIndicatorWrapperRef.current.querySelector('.step.current')
    const nextStep = currentStep.nextElementSibling
    currentStep.className = currentStep.className.replace('current', 'previous')
    nextStep.className = nextStep.className.replace('next', 'current')

    const currentTab = tabsWrapperRef.current.querySelector('.tab.current')
    const nextTab = currentTab.nextElementSibling
    currentTab.className = currentTab.className.replace('current', 'previous')
    nextTab.className = nextTab.className.replace('next', 'current')
    setStep(step + 1)
  }
  return (
    <section className="create-new-challenge-section">
      <form >
        <div className="step-indicator-wrapper flex-rw center" ref={stepIndicatorWrapperRef}>
          <div className="step current"></div>
          <div className="step next"></div>
          <div className="step next"></div>
        </div>

        <div className="tabs-wrapper" ref={tabsWrapperRef}>
          <div className="tab current">

            <OutlinedCustomField className="title-field" placeholder="Title">
              <input type="text" placeholder=" " maxLength={20} required={true} />
            </OutlinedCustomField>
            {
              addDiscription
                ? <>
                  <OutlinedCustomField className="description-field" placeholder="Description"  >
                    <textarea placeholder=" " maxLength={200} rows={4} onChange={(e) => setDescriptionValue(e.target.value)}>{descriptionValue}</textarea>
                  </OutlinedCustomField>
                  <button className="add-remove-button" onClick={() => setAddDiscription(false)}>Remove -</button>
                </>
                : <button className="add-remove-button" onClick={() => setAddDiscription(true)}>Add description +</button>
            }

          </div>
          <div className="tab next">
            <div className="difficulty-label flex-rw ">
              <span className="name">Difficulty</span>
              <Select>
                <span className="option selected easy">Easy</span>
                <span className="option medium">Medium</span>
                <span className="option hard">Hard</span>
              </Select>
            </div>

            <div className="pinned-field flex-rw ">
              <label htmlFor="pinned">Pinned</label>
              <div className="switch-wrapper">
                <label className="switch-small">
                  <input id="pinned" type="checkbox" />
                  <span className="slider "></span>
                </label>
              </div>
            </div>
          </div>
          <div className="tab next">
            {
              addDueDate 
             ? <>
              <OutlinedCustomField className="title" placeholder="date">
                <input type="date" placeholder=" "  />
              </OutlinedCustomField>
              <button className="add-remove-button" onClick={() => setAddDueDate(false)}>Remove -</button>
              </>
              : <button className="add-remove-button" onClick={() => setAddDueDate(true)}>Add due date +</button>
            }
          </div>
        </div>

        <div className="button-wrapper flex-rw">

          {step > 0 && <button className="button negitive" onClick={previous}>Previous</button>}
          {step < 2 && <button className="button positive" onClick={next}>Next</button>}
          {step === 2 && <button className="button positive" type="submit">Create</button>}
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