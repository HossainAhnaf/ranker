//modules
import React ,{useRef} from 'react'
import { useDispatch } from 'react-redux'
import useDebounce from '../../hooks/useDebounce'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
//components
import MenuButton from '../../components/MenuButton';
import Icon from 'react-inlinesvg'

//svg
import dropDownSvg from '../../assets/svg/drop-down.svg'
import tickSvg from '../../assets/svg/tick(1).svg'
import plusSvg from '../../assets/svg/plus(1).svg'
import closeSvg from '../../assets/svg/close(1).svg'
import searchSvg from '../../assets/svg/search.svg'
import filterSvg from '../../assets/svg/filter.svg'
function Toolbar() {

  const activeFiltersListRef = useRef(null)

  const addFilter = (type,value)=>{
    let button = activeFiltersListRef.current.querySelector(`.filter.${type}`) 
    const dataPoint = button.querySelector('span:first-of-type')
    dataPoint.textContent = value     
    if (type === 'difficulty') dataPoint.className = value.toLowerCase() 
    if (!button.classList.contains('active')) button.classList.add('active')
  }
  const removeFilter = (type)=>{
    activeFiltersListRef.current.querySelector(`.filter.${type}`)?.classList.remove('active') 
  }
  const searchInputHandler = useDebounce(({target}) => {
    addFilter('search',target.value)
  },600)
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
      <MenuButton  label="Difficulty" optionsType="button-type"  onChange={(value)=>addFilter('difficulty',value)}>
        <span datavalue="Easy" className="option button easy">Easy
          <Icon src={tickSvg} />
        </span>
        <span datavalue="Medium" className="option button medium">Medium
          <Icon src={tickSvg} />
        </span>
        <span datavalue="Hard" className="option button hard">Hard
          <Icon src={tickSvg} />
        </span>
      </MenuButton>

      <MenuButton  label="Sort by" optionsType="button-type" onChange={(value)=>addFilter('sort-by',value)}>
        <span datavalue="Ordered" className="option button selected">
          Ordered
          <Icon src={tickSvg} />
        </span>
        <span datavalue="Difficulty" className="option button">
          Difficulty
          <Icon src={tickSvg} />
        </span>
      </MenuButton>

      <MenuButton  label="Features" optionsType="checkbox-type" onChange={(type,value)=>addFilter(type,value)}>
        <label datavalue='Due Date' datatype="due-date" className="option button ">
          <input type="checkbox" hidden />
          <span>Due Date</span>

        </label>
        <label datavalue='Pinned' datatype="pinned" className="option button">
          <input type="checkbox" hidden />
          <span>Pinned</span>
        </label>
      </MenuButton>
      <div className="search-input-wrapper flex-rw ">
        <span className="svgCont">
          <Icon src={searchSvg} />
        </span>
        <input type="text" placeholder="Search challenges.." onInput={searchInputHandler}/>
      </div>
     
        <Link to="/create-new-challenge" className="create-challenge-button button positive flex-rw center">
          <span className="svgCont">
            <Icon src={plusSvg} />
          </span>
          <b>Create new</b>
        </Link>
        <div className="active-filters-list flex-rw" ref={activeFiltersListRef}>
           <span className="filter sort-by active">
            <span>Ordered</span>
           </span>
           <span className="filter difficulty flex-rw center">
            <span>Easy</span>
            <span className="close-icon flex-rw center button" onClick={()=>removeFilter("difficulty")}>
            <Icon src={closeSvg} />
            </span>
           </span>      
           <span className="filter pinned flex-rw center">
            <span>Pinned</span>
            <span className="close-icon flex-rw center button" onClick={()=>removeFilter('pinned')}>
            <Icon src={closeSvg} />
            </span>
           </span>
           <span className="filter due-date flex-rw center">
            <span>Due date</span>
            <span className="close-icon flex-rw center button" onClick={()=>removeFilter('due-date')}>
            <Icon src={closeSvg} />
            </span>
           </span>
           <span className="filter search flex-rw center">
            <span></span>
            <span className="close-icon flex-rw center button" onClick={()=>removeFilter('search')}>
            <Icon src={closeSvg} />
            </span>
           </span>
           
        </div>
    </nav>
  )
}


export default Toolbar