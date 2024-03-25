//Modules
import React, { useEffect, useRef, useState,useCallback } from "react";
import dummyRecentChallengesData from '../data/recentChallengesData.json'
import challengesSectionNavSlice, { showChallengesSectionExtraNav,hideChallengesSectionExtraNav } from '../store/slices/challengesSectionNavSlice'
import { useDispatch } from "react-redux";

//components
import ChallengesSectionNav from "../components/ChallengesSectionNav";
import ChallengeCardsWrapper from "../components/ChallengeCardsWrapper";

//css
import '../assets/css/challenges.css';

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
    window.addEventListener('scroll', HandleChallengesSectionNavVisibility)
    return ()=>{
     window.removeEventListener('scroll',HandleChallengesSectionNavVisibility)
     dispatch(hideChallengesSectionExtraNav())
    }
  },[])

  return (
    <section className="challenges-section flex-cm">
     
      <ChallengesSectionNav ref={ChallengesSectionNavRef}/>

      <ChallengeCardsWrapper data={challengesData} />

   
    </section>


  )
}

export default Challenges;


