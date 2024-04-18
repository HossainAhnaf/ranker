//Modules
import React, { useState,useMemo, useEffect } from "react";
import dummyRecentChallengesData from '../../data/challengesData.json'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
//components
import Toolbar from "./Toolbar";
import ChallengeCardsWrapper from "../../components/ChallengeCardsWrapper";
import ChallengesActivity from "../../components/ChallengesActivity/ChallengesActivity";
import AuthorProgress from "../../components/AuthorProgress";

//css
import '../../assets/css/challenges.css';
import '../../assets/css/mobile-large/challenges.css';
import '../../assets/css/tablet/challenges.css';
function Challenges() {
  
  const {username,level,xp} = useSelector(state=>state.userSlice)
  const progressParcentage = useMemo(()=>(xp /1000)*100)

  const [challengesData, setChallengesData] = useState(dummyRecentChallengesData)
  useEffect(() => {
    if (!document.cookie.includes('isUserAlreadyChallengesPageVisited')) {
      document.cookie = 'isUserAlreadyChallengesPageVisited=true'
    }
  },[])
  return (
    <section className="challenges-section flex-rw">
      <div className="primary">
   
      <Toolbar />
      <ChallengeCardsWrapper data={challengesData} />
      </div>
      
      <div className="secondary flex-cm">
        <AuthorProgress progressParcentage={progressParcentage} authorLevel={level} authorXp={xp}/>
        <hr />
        <ChallengesActivity shortView={true}/>
         <Link className="view-profile-button positive button" to={`/profile/${username}`}>View Profile</Link>
       </div>

   
    </section>


  )
}

export default Challenges;
