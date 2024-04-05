//Modules
import React, { useEffect, useRef, useState,useCallback } from "react";
import dummyRecentChallengesData from '../data/challengesData.json'
import challengesSectionNavSlice, { showChallengesSectionExtraNav,hideChallengesSectionExtraNav } from '../store/slices/challengesSectionNavSlice'
import { useDispatch } from "react-redux";

//components
import ChallengesSectionNav from "../components/ChallengesSectionNav";
import ChallengeCardsWrapper from "../components/ChallengeCardsWrapper";
import AuthorProgress from "../components/AuthorProgress";

//css
import '../assets/css/challenges.css';
import '../assets/css/laptop/challenges.css';
function Challenges() {
  const dispatch = useDispatch()  
  const [challengesData, setChallengesData] = useState(dummyRecentChallengesData)
  const ChallengesSectionNavRef = useRef(null)

  const HandleChallengesSectionNavVisibility = useCallback(() => {
    const navHeight = document.querySelector('.main-nav')?.getBoundingClientRect()?.height || 0;
    if (navHeight >= ChallengesSectionNavRef.current.getBoundingClientRect().top)
     dispatch(showChallengesSectionExtraNav()) ;
    else dispatch(hideChallengesSectionExtraNav());
  }, [dispatch,ChallengesSectionNavRef]);
  useEffect(() => {
    // window.addEventListener('scroll', HandleChallengesSectionNavVisibility)
    // return ()=>{
    //  window.removeEventListener('scroll',HandleChallengesSectionNavVisibility)
    //  dispatch(hideChallengesSectionExtraNav())
    // }
  },[])

  return (
    <section className="challenges-section flex-rw">
      <div className="primary">
      <ChallengesSectionNav ref={ChallengesSectionNavRef}/>
      <ChallengeCardsWrapper data={challengesData} />
      </div>
      
      <div className="secondary">
        <AuthorProgress progressParcentage={50} authorLevel={5} authorXp={1000}/>
       </div>

   
    </section>


  )
}

export default Challenges;


