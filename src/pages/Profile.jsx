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
   const params = useParams()
  const {username,name,logoSrc,rank,status,challenges,passed,failed,level,xp} = useSelector(state=>state.userSlice)
  
  const isAuthor = (username === params.username || params.username === 'me')

  const [challengesData, setChallengesData] = useState(dummyRecentChallengesData)

  const [authorUsername,setAuthorUsername] = useState(username)
  const [authorName,setAuthorName] = useState(name)
  const [authorLogoSrc,setAuthorLogoSrc] = useState(logoSrc)
  const [authorRank,setAuthorRank] = useState(rank)
  const [authorStatus,setAuthorStatus] = useState(status)
  const [authorChallenges,setAuthorChallenges] = useState(challenges)
  const [authorPassed,setAuthorPassed] = useState(passed)
  const [authorFailed,setAuthorFailed] = useState(failed)
  const [authorLevel,setAuthorLevel] = useState(level)
  const [authorXp,setAuthorXp] = useState(xp)
   
  const [progressParcentage, setProgressParcentage] = useState(0)

 

 
   const fetchChallengesData = () => {
    // fetch('../data/recentChallengesData.json')
    // .then(res=>res.json())
    // .then(setChallengesData)
  }

  const numberTypeInfoIncreaceHandler = (challenges,passed,failed,level,xp) => {
   useSetValueFromStart(0,challenges,setAuthorChallenges)
    useSetValueFromStart(0,passed, setAuthorPassed)
    useSetValueFromStart(0,failed, setAuthorFailed)
    useSetValueFromStart(0,level,setAuthorLevel)
    useSetValueFromStart(0,xp,setAuthorXp)
    useSetValueFromStart(0, (xp / 1000) * 100,setProgressParcentage)
  }

  const fetchProfileData = () => {
    if (!isAuthor) {
     const {username,name,logoSrc,rank,status,challenges,passed,failed,level,xp} = singleUser[params.username]
     setAuthorUsername(username)
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
      setAuthorUsername(username)
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
    }
   }
 
  useEffect(() => {
    console.log(params.username);
   fetchProfileData()
   if (isAuthor) 
   fetchChallengesData()
  }, [params])
  

 
  return (
    <>
      <section className="info-section flex-cm center">
        <div className="primary flex-cm center">
          <p className='username'>@{authorUsername}</p>
          <UserLogo logoSrc={authorLogoSrc} status={authorStatus} level={authorLevel} />
          <h3 className="name">{authorName}</h3>
        </div>
        <Info name='Rank' value={authorRank} />
        <Info name='Status' value={authorStatus} />
        <Info name='Challenges' value={authorChallenges} />
        <Info name='Passed' value={authorPassed} />
        <Info name='Failed' value={authorFailed} />
        <br />
        <hr />
        <br />
   
         <div role='progressbar' style={{"--value": progressParcentage}}></div>
                
        <Info name='Level' value={`${authorLevel} / 10`} />
        <Info name='Xp' value={`${authorXp} / 1000`} />
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




