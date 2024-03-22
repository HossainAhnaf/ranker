//Modules
import React, { useState } from "react";
import dummyRecentChallengesData from '../data/recentChallengesData.json'
import { Link } from "react-router-dom";
//components
import FilterOption from "../components/FilterOption";
import ChallengeCardsWrapper from "../components/ChallengeCardsWrapper";
import Icon from 'react-inlinesvg'
//svg
import searchSvg from '../assets/svg/search.svg'
import filterSvg from '../assets/svg/filter.svg'
import plusSvg from '../assets/svg/plus(1).svg'
//css
import '../assets/css/challenges.css';

function Challenges() {

  const [challengesData, setChallengesData] = useState(dummyRecentChallengesData)

  const [showFilterOption, setShowFilterOption] = useState(false)


  return (
    <section className="challenges-section flex-cm">
      <nav className="flex-rw center">
        <span className="total-challenges">Total: <span className="data">100</span></span>
        <div className="search-form flex-rw center left">
          <input type="text" placeholder="Type here to search.." />
          <div className="button-container flex-rw center">
            <button className="search-button button" type="submit">
             <Icon src={searchSvg}/>
            </button>
            <button className="filter-button positive button" onClick={() => setShowFilterOption(true)}>
              <Icon src={filterSvg}/>
            </button>
          </div>
        </div>
        {
          showFilterOption && <FilterOption setShowFilterOption={setShowFilterOption} />
        }
      </nav>

      <ChallengeCardsWrapper data={challengesData} />

     <Link to="/create-new-challenge">
      <button className="create-challenge-button positive flex-rw center">
        <span className="svgCont">
          <Icon src={plusSvg}/>
        </span>

        <b>Create New Challenge</b>
      </button>
      </Link>
    </section>


  )
}

export default Challenges;


