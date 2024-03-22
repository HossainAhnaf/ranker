import React from 'react'

function Info({name,value}) {
  return (
    <div className="info flex-rw">
          <b className="name">{name}:</b>
          <b className="value">{value}</b>
        </div>
  )
}

export default Info
