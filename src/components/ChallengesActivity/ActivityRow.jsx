import React from 'react'

function ActivityRow({ headActivityData, shortView }) {
  return (
    <div className="activity-row flex-rw">
      <span className='head-activity flex-rw '>
        <span className="name">
          {headActivityData.name}
        </span>
        <span className="value">
          - {headActivityData.value}
        </span>
      </span>
      {headActivityData.name === 'Passed' && !shortView &&
        <>
          <span className='activity flex-rw center'>
            <span className="name easy">
              Easy
            </span>
            <span className="value">
              x20
            </span>
          </span>
          <span className='activity flex-rw center'>
            <span className="name medium">
              Medium
            </span>
            <span className="value">
              x60
            </span>
          </span>
          <span className='activity flex-rw center'>
            <span className="name hard">
              Hard
            </span>
            <span className="value">
              x18
            </span>
          </span>
          <span className='activity flex-rw center'>
            <span className="name crazy">
              Crazy
            </span>
            <span className="value">
              x2
            </span>
          </span>
        </>
      }
    </div>
  )
}

export default ActivityRow
ActivityRow.defaultProps = {
  headActivityData: {name:"name",value:0},
  shortView: false
}