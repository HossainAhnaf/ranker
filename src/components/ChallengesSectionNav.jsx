//modules
import React ,{useEffect, useRef} from 'react'
import { useDispatch } from 'react-redux'
import { showFilterOption } from '../store/slices/challengesSectionNavSlice'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

//components
import MenuButton from './MenuButton';
import Icon from 'react-inlinesvg'

//svg
import dropDownSvg from '../assets/svg/drop-down.svg'
import tickSvg from '../assets/svg/tick(1).svg'
import plusSvg from '../assets/svg/plus(1).svg'
import searchSvg from '../assets/svg/search.svg'
import filterSvg from '../assets/svg/filter.svg'
function ChallengesSectionNav() {

  const activeFiltersListRef = useRef(null)
  const addFilter = (type,value)=>{
   alert(value)
  }
  return (
    <nav className="challenges-section-nav flex-rw" >
      <div className="total-challenges-data-wrapper flex-rw">
        <span className="data flex-rw center">
          <span className="name">Total</span>
          <span className="value">x10</span>
        </span>
        <span className="data flex-rw center">
          <span className="name easy">Easy</span>
          <span className="value">x5</span>
        </span>
        <span className="data flex-rw center">
          <span className="name medium">Medium</span>
          <span className="value">x4</span>
        </span>
        <span className="data flex-rw center">
          <span className="name hard">Hard</span>
          <span className="value">x1</span>
        </span>
      </div>
      <MenuButton label="Difficulty" optionsType="button-type" onChange={(value)=>addFilter('difficulty',value)}>
        <span datavalue="easy" className="option easy">Easy
          <Icon src={tickSvg} />
        </span>
        <span datavalue="medium" className="option medium">Medium
          <Icon src={tickSvg} />
        </span>
        <span datavalue="hard" className="option hard">Hard
          <Icon src={tickSvg} />
        </span>
      </MenuButton>

      <MenuButton label="Sort by" optionsType="button-type">
        <span datavalue="serial" className="option selected">
          Serial
          <Icon src={tickSvg} />
        </span>
        <span datavalue="difficulty" className="option">
          Difficulty
          <Icon src={tickSvg} />
        </span>
      </MenuButton>

      <MenuButton label="Features" optionsType="checkbox-type">
        <label datavalue="due-date" className="option ">
          <input type="checkbox" hidden />
          <span>Due Date</span>

        </label>
        <label datavalue="pinned" className="option">
          <input type="checkbox" hidden />
          <span>Pinned</span>
        </label>
      </MenuButton>
      <div className="search-input-wrapper flex-rw center">
        <span className="svgCont">
          <Icon src={searchSvg} />
        </span>
        <input type="text" placeholder="Search challenges.." />
      </div>
     
        <Link to="/create-new-challenge" className="create-challenge-button button positive flex-rw center">
          <span className="svgCont">
            <Icon src={plusSvg} />
          </span>
          <b>Create new</b>
        </Link>
        <div className="active-filters-list" ref={activeFiltersListRef}>
          
        </div>
    </nav>
  )
}


export default ChallengesSectionNav



// <div className="challenges-search-form flex-rw center left">
//       <input type="text" placeholder="Type here to search.." />
//       <div className="button-container flex-rw center">
//           <button className="search-button flex-rw center  button" type="submit">
//               <Icon src={searchSvg} />
//           </button>
//           <button className="filter-button flex-rw center positive button" onClick={() => dispatch(showFilterOption())}>
//               <Icon src={filterSvg} />
//           </button>
//       </div>
//   </div>