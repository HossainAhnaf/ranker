//Modules
import React, { useState } from "react";
import dummyRecentChallengesData from '../data/recentChallengesData.json'

//components
import ChallengesSectionNav from "../components/ChallengesSectionNav";
import ChallengeCardsWrapper from "../components/ChallengeCardsWrapper";

//css
import '../assets/css/challenges.css';

function Challenges() {

  const [challengesData, setChallengesData] = useState(dummyRecentChallengesData)


  return (
    <section className="challenges-section flex-cm">
     
      <ChallengesSectionNav />

      <ChallengeCardsWrapper data={challengesData} />

   
    </section>


  )
}

export default Challenges;


