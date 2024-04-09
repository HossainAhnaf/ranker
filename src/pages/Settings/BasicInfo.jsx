import React from 'react'

function BasicInfo() {

  return (
    <div className="basic-info flex-cm center">
      <div className="info-group">
        <b className="group-name">Basic Info</b>
        <div className="info-wrapper flex-cm center">
          <div className="info flex-cm center">
            <div className="name-wrapper flex-rw">
              <p className="name">Name</p>
              <button className="edit-button">Edit</button>
            </div>
            <p className="value">Hossain</p>
            <input type="text" value="Hossain" />
            <div className="buttons-wrapper">
              <button className="save-button">Save</button>
              <button className="cancel-button">Cancel</button>
            </div>
          </div>

          <div className="info flex-cm center">
            <div className="name-wrapper flex-rw">
              <p className="name">Name</p>
              <button className="edit-button">Edit</button>
            </div>
            <p className="value">Hossain</p>
            <input type="text" value="Hossain" />
            <div className="buttons-wrapper">
              <button className="save-button">Save</button>
              <button className="cancel-button">Cancel</button>
            </div>
          </div>


        </div>
      </div>

    </div>
  )
}

export default BasicInfo
