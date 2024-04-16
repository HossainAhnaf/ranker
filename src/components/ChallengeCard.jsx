//modules
import React from 'react'
import PropTypes from 'prop-types'
//components
import Icon from 'react-inlinesvg'
//svg
import pinSvg from '../assets/svg/pin.svg'
import tickSvg from '../assets/svg/tick.svg'
import closeSvg from '../assets/svg/close.svg'
//css
import '../assets/css/challenge-card.css'
import '../assets/css/mobile-large/challenge-card.css'

function ChallengeCard({ title, description, difficulty, pinned, id }) {
  return (
    <div className="challenge-card flex-cm left" datapinned={pinned.toString()}>
      <div className="right-wrapper flex-rw center">
        <small className={`difficulty ${difficulty}`}>{difficulty[0].toUpperCase() + difficulty.slice(1)}</small>
        {
          pinned &&
          <span className="pin-icon svgCont">
            <Icon src={pinSvg} />
          </span>
        }
      </div>
      <h4 className="title">{id}. {title}</h4>
      <small className="description">{description}</small>
      <div className="button-container flex-rw center left">
        <button className="tick button svgCont noEffect">
          <Icon src={tickSvg} />
        </button>
        <button className="cross button svgCont noEffect">
          <Icon src={closeSvg} />
        </button>
      </div>


    </div>
  )
}

ChallengeCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  difficulty: PropTypes.string,
  pinned: PropTypes.bool,
  id: PropTypes.number
}
export default ChallengeCard

