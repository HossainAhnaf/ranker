import React from 'react'
import {useOutletContext} from 'react-router-dom'

//components
import Select from '../../components/Select'
function Privacy() {

  const [editButtonClickHandler] = useOutletContext()
  const cancleButtonClickHandler = ({currentTarget},type) => {
    const content = currentTarget.parentElement.parentElement
     content.classList.remove('editable')

  }
  return (
    <div className="outlet privacy">
      <section>
        <b className="section-name">Privacy</b>
        <div className="content-wrapper flex-cm center">
          <div className="content privacy-type">
          <p className="title">Display my recent challenges</p>
            <div className="description">
            After closing, your Recent Challenges data will not be displayed on your profile page to others.
            </div>
           <div className="value-wrapper">
            <p className="value">Yes</p>
            <Select className="value-field ">
              <span  className={`option selected`} datavalue="Yes">Yes</span>
              <span className={`option `} datavalue="No">No</span>
            </Select>
            <div className="buttons-wrapper flex-rw center">
              <button className="save-button positive">Save</button>
              <button className="cancel-button negitive" onClick={(e)=>cancleButtonClickHandler(e,'username')}>Cancel</button>
            </div>
           </div>
            <button className="edit-button" onClick={editButtonClickHandler}>Edit</button>
          </div>
        </div>
        
      </section>
    </div>
  )
}

export default Privacy
