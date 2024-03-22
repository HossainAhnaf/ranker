//modules
import React from 'react'
import PropTypes  from 'prop-types'
//components
import Challenge from './ChallengeCard'

//css
import '../assets/css/challenge-cards-wrapper.css'
function ChallengeCardsWrapper({data,shortDesc}) {
  return (
    <div className="challenge-cards-wrapper flex-cm">
      {
    data.map(({title,description, difficulty,pinned,id},index)=>{
    return <Challenge title={title} description={shortDesc ? description.slice(0,50) + '...' :description} difficulty={difficulty} pinned={pinned} id={id} key={index}/>           
      })
      }
    </div>
  )
}

ChallengeCardsWrapper.propTypes = {
  data:PropTypes.arrayOf(PropTypes.object)
}

export default ChallengeCardsWrapper
