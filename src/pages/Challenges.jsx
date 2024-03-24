//Modules
import React, { useState } from "react";
import dummyRecentChallengesData from '../data/recentChallengesData.json'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

//components
import ChallengesSearchForm from "../components/ChallengesSearchForm";
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

  const isFilterOptionActive = useSelector(state => state.challengesSearchFormSlice.isFilterOptionActive)   

  return (
    <section className="challenges-section flex-cm">
      <nav className="flex-rw">
        <span className="total-challenges">Total: <span className="data">100</span></span>
            <div className="search-form-wrapper">
              <ChallengesSearchForm/>
              </div>  
            {
         isFilterOptionActive &&  <FilterOption />
            }
      </nav>

      <ChallengeCardsWrapper data={challengesData} />

     <Link to="/create-new-challenge">
      <button className="create-challenge-button positive flex-rw center button">
        <span className="svgCont">
          <Icon src={plusSvg}/>
        </span>

        <b>New</b>
      </button>
      </Link>
    </section>


  )
}

export default Challenges;


