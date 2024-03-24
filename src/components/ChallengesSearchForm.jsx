//modules
import React from 'react'
import { useDispatch } from 'react-redux'
import { showFilterOption } from '../store/slices/challengesSearchFormSlice'
//components
import Icon from 'react-inlinesvg'
//svg
import searchSvg from '../assets/svg/search.svg'
import filterSvg from '../assets/svg/filter.svg'
//css
import '../assets/css/challenges-search-form.css'

function ChallengesSearchForm() {
    const dispatch = useDispatch()
    return (

        <div className="challenges-search-form flex-rw center left">
            <input type="text" placeholder="Type here to search.." />
            <div className="button-container flex-rw center">
                <button className="search-button button" type="submit">
                    <Icon src={searchSvg} />
                </button>
                <button className="filter-button positive button" onClick={() => dispatch(showFilterOption())}>
                    <Icon src={filterSvg} />
                </button>
            </div>
        </div>
    )
}

export default ChallengesSearchForm
