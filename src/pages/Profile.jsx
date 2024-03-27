//modules
import React, { useEffect, useMemo, useState } from 'react';
import dummyRecentChallengesData from '../data/recentChallengesData.json'
import useSetValueFromStart from '../hooks/useSetValueFromStart'
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

//fake
import {singleUser} from '../data/usersData.json'
//components
import UserLogo from '../components/UserLogo';
import ChallengeCardsWrapper from '../components/ChallengeCardsWrapper';
import Info from '../components/Info';


//css
import '../assets/css/profile.css';

function Profile() {
   const adminUsername = useParams().username
  const {username,name,logoSrc,rank,status,challenges,passed,failed,level,xp} = useSelector(state=>state.userSlice)

  const isAuthor = (username === adminUsername || adminUsername === 'me')

  const [challengesData, setChallengesData] = useState(dummyRecentChallengesData)


  const [authorName,setAuthorName] = useState(name)
  const [authorLogoSrc,setAuthorLogoSrc] = useState(logoSrc)
  const [authorRank,setAuthorRank] = useState(rank)
  const [authorStatus,setAuthorStatus] = useState(status)
  const [authorChallenges,setAuthorChallenges] = useState(challenges)
  const [authorPassed,setAuthorPassed] = useState(passed)
  const [authorFailed,setAuthorFailed] = useState(failed)
  const [authorLevel,setAuthorLevel] = useState(level)
  const [authorXp,setAuthorXp] = useState(xp)
   

  const [currentChallenges, setCurrentChallenges] = useState(0)
  const [currentPassed, setCurrentPassed] = useState(0)
  const [currentFailed, setCurrentFailed] = useState(0)
  const [currentLevel, setCurrentLevel] = useState(0)
  const [currentXp, setCurrentXp] = useState(0)

  
  const progressParcentage = useMemo(() => (authorXp / 1000) * 100, [authorXp])
  const [progressParcentageText, setProgressParcentageText] = useState(0)
  const [lessThan10Percent, setLessThan10Percent] = useState('true')


 
   const fetchChallengesData = () => {
    // fetch('../data/recentChallengesData.json')
    // .then(res=>res.json())
    // .then(setChallengesData)
  }
  const setXpProgressBarData = (parcent) => {
    useSetValueFromStart(0, parcent,setProgressParcentageText)
    setLessThan10Percent(progressParcentageText <= 10 ? 'true' : 'false')
  }
  
  const numberTypeInfoIncreaceHandler = (challenges,passed,failed,level,xp) => {
   useSetValueFromStart(0,challenges,setCurrentChallenges)
    useSetValueFromStart(0,passed, setCurrentPassed)
    useSetValueFromStart(0,failed, setCurrentFailed)
    useSetValueFromStart(0,level,setCurrentLevel)
    useSetValueFromStart(0,xp,setCurrentXp)
    setXpProgressBarData((xp / 1000) * 100)
  }

  const fetchProfileData = () => {
    if (!isAuthor) {
     const {name,logoSrc,rank,status,challenges,passed,failed,level,xp} = singleUser[adminUsername]
     setAuthorName(name)
     setAuthorLogoSrc(logoSrc)
     setAuthorRank(rank)
     setAuthorStatus(status)
     setAuthorChallenges(challenges)
     setAuthorPassed(passed)
     setAuthorFailed(failed)
     setAuthorLevel(level)
     setAuthorXp(xp)
     numberTypeInfoIncreaceHandler(challenges,passed,failed,level,xp)
    } else{
      numberTypeInfoIncreaceHandler(challenges,passed,failed,level,xp)
    }
   }
 
  useEffect(() => {
   if (isAuthor) 
   //profile data will be set from redux
    fetchChallengesData()
   else
   //only author can see active challenges
   fetchProfileData()
  }, [])
  

 
  return (
    <>
      <section className="info-section flex-cm center">
        <div className="primary flex-cm center">
          <UserLogo logoSrc={authorLogoSrc} status={authorStatus} level={authorLevel} />
          <h3 className="name">{authorName}</h3>
        </div>
        <Info name='Rank' value={authorRank} />
        <Info name='Status' value={authorStatus} />
        <Info name='Challenges' value={currentChallenges} />
        <Info name='Passed' value={currentPassed} />
        <Info name='Failed' value={currentFailed} />
        <br />
        <hr />
        <br />
        <div className="xp-items-wrapper flex-rw">
          <div className="progress-bar" dataless={lessThan10Percent}>
            <div style={{ '--value': progressParcentage + '%' }} className="inner">
              <span className="progress">{progressParcentageText + '%'}</span>
            </div>
          </div>
        </div>
        <Info name='Level' value={`${currentLevel} / 10`} />
        <Info name='Xp' value={`${currentXp} / 1000`} />
      </section>

     {
    isAuthor &&
      <section className="recent-challenges flex-cm">
        <h3>Recent Challenges</h3>
        <ChallengeCardsWrapper data={challengesData} shortDesc={true} />
        <button className="see-all-button button positive">See all</button>
      </section>
     }
    </>
  )
}

export default Profile




