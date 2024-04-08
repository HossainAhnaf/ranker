//Modules
import React, { useState,useMemo } from "react";
import dummyRecentChallengesData from '../data/challengesData.json'
import { useSelector } from "react-redux";

//components
import ChallengesSectionNav from "../components/ChallengesSectionNav";
import ChallengeCardsWrapper from "../components/ChallengeCardsWrapper";
import AuthorProgress from "../components/AuthorProgress";

//css
import '../assets/css/challenges.css';
import '../assets/css/mobile-large/challenges.css';
import '../assets/css/tablet/challenges.css';
function Challenges() {
  
  const {level,xp} = useSelector(state=>state.userSlice)
  const progressParcentage = useMemo(()=>(xp /1000)*100)
  const [challengesData, setChallengesData] = useState(dummyRecentChallengesData)

  return (
    <section className="challenges-section flex-rw">
      <div className="primary">
   
      <ChallengesSectionNav />
      <ChallengeCardsWrapper data={challengesData} />
      </div>
      
      <div className="secondary">
        <AuthorProgress progressParcentage={progressParcentage} authorLevel={level} authorXp={xp}/>
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