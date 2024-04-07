//modules
import React from 'react'
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

  return (
    <nav className="challenges-section-nav flex-rw" >
      <MenuButton  >
      <span className="option selected">Easy
       <Icon src={tickSvg}/>
      </span>
      <span className="option">Medium
       <Icon src={tickSvg}/>
      </span>
      <span className="option">Hard
       <Icon src={tickSvg}/>
      </span>
     </MenuButton> 
    </nav>
  )
}


export default ChallengesSectionNav

// <Link to="/create-new-challenge">
// <button className="create-challenge-button button positive flex-rw center button">
//   <span className="svgCont">
//     <Icon src={plusSvg}/>
//   </span>
//   <b>Create new</b>
// </button>
// </Link>

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