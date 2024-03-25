//modules
import React, { useEffect, useRef } from 'react'
import { useDispatch } from "react-redux";
import {hideFilterOption} from '../store/slices/challengesSectionNavSlice'
//components
import Select from './Select'
//css  
import '../assets/css/filter-option.css'
function FilterOption({setShowFilterOption}) {
   const filterOptionRef = useRef(null)

   const dispatch = useDispatch()

   useEffect(()=>{
    filterOptionRef.current.focus()
   },[filterOptionRef])
   
   useEffect(()=>{
     document.body.style.overflow = "hidden"
     return ()=>{
      document.body.style.overflow = ""

      }
   },[])
 
  return (

   <div className="filter-option  flex-cm" tabIndex="0" ref={filterOptionRef} >
    <p className="title">
    Search filters
    </p>
   
    <div className="option flex-rw">
    <span className="name">Sort by</span>
    <Select className='value'>
      <span className="option">Difficulty</span>
      <span className="option selected">Date created</span>
    </Select>
    </div>
    
    
    <div className="option flex-rw">
    <span className="name">Difficulty</span>
    <Select className='value'>
     <span className="option selected">Easy</span>
      <span className="option">Medium</span>
      <span className="option">Hard</span>
    </Select>
   
    </div>
    
    <div className="features flex-cm">
    <span className="name">Features</span>
    <div className="value flex-rw">
    <label className="feature">
    <input type="checkbox" hidden />
    <p>
    Pin
    </p>
    </label>
    <label className="feature">
    <input type="checkbox" hidden />
    <p>
    Due date
    </p>
    </label>
    </div>
    </div>
    
    <div className="button-container flex-rw">
    <button  className='button' onClick={()=>dispatch(hideFilterOption())}>Cancel</button>
    <button className='button' >Aply</button>
    
    </div>
    
    </div>
  )
}


export default FilterOption

