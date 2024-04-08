//Modules
import React, { useState,useMemo } from "react";
import dummyRecentChallengesData from '../data/challengesData.json'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
//components
import ChallengesSectionNav from "../components/ChallengesSectionNav";
import ChallengeCardsWrapper from "../components/ChallengeCardsWrapper";
import ChallengesActivity from "../components/ChallengesActivity/ChallengesActivity";
import AuthorProgress from "../components/AuthorProgress";

//css
import '../assets/css/challenges.css';
import '../assets/css/mobile-large/challenges.css';
import '../assets/css/tablet/challenges.css';
function Challenges() {
  
  const {username,level,xp} = useSelector(state=>state.userSlice)
  const progressParcentage = useMemo(()=>(xp /1000)*100)
  const [challengesData, setChallengesData] = useState(dummyRecentChallengesData)

  return (
    <section className="challenges-section flex-rw">
      <div className="primary">
   
      <ChallengesSectionNav />
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



// const dispatch = useDispatch()  
// 
// const HandleChallengesSectionNavVisibility = useCallback(() => {
//   const navHeight = document.querySelector('.main-nav')?.getBoundingClientRect()?.height || 0;
//   if (navHeight >= ChallengesSectionNavRef.current.getBoundingClientRect().top)
//    dispatch(showChallengesSectionExtraNav()) ;
//   else dispatch(hideChallengesSectionExtraNav());
// }, [dispatch,ChallengesSectionNavRef]);
// useEffect(() => {
//   window.addEventListener('scroll', HandleChallengesSectionNavVisibility)
//   return ()=>{
//    window.removeEventListener('scroll',HandleChallengesSectionNavVisibility)
//    dispatch(hideChallengesSectionExtraNav())
//   }
// },[])