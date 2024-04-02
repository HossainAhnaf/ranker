//modules
import React, { useEffect, useMemo, useState } from 'react';
import dummyRecentChallengesData from '../data/recentChallengesData.json'
import useSetValueFromStart from '../hooks/useSetValueFromStart'
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

//fake
import {singleUser} from '../data/usersData.json'
//components
import UserLogo from '../components/UserAvatar';
import ChallengeCardsWrapper from '../components/ChallengeCardsWrapper';
import Info from '../components/Info';
import Icon from 'react-inlinesvg';
//svg
import pencilSvg from '../assets/svg/pencil.svg';
//css
import '../assets/css/profile.css';

function Profile() {
   const params = useParams()
  const {username,name,avatar,rank,status,challenges,passed,failed,level,xp} = useSelector(state=>state.userSlice)
  
  const isAuthor = (username === params.username || params.username === 'me')

  const [challengesData, setChallengesData] = useState(dummyRecentChallengesData)

  const [authorUsername,setAuthorUsername] = useState(username)
  const [authorName,setAuthorName] = useState(name)
  const [authoravatar,setAuthoravatar] = useState(avatar)
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
     const {username,name,avatar,rank,status,challenges,passed,failed,level,xp} = singleUser[params.username]
     setAuthorUsername(username)
     setAuthorName(name)
     setAuthoravatar(avatar)
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
      setAuthoravatar(avatar)
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
   fetchProfileData()
   if (isAuthor) 
   fetchChallengesData()
  }, [params])
  

 
  return (
    <>
      <section className="info-section flex-cm center">
        <div className="primary flex-cm center">
         <div className="top-items-wrapper flex-rw"> 
          <p className='username'>@{authorUsername}</p>
          {isAuthor &&
          <button className="profile-edit-button flex-rw center button">
            <div className="svgCont flex-rw center">
            <Icon src={pencilSvg} />   
            </div> 
            <span>Edit</span>
          </button>
           }
          </div>
          <UserLogo avatar={authoravatar} status={authorStatus} level={authorLevel} />
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
        <h3 className='title'>Recent Challenges</h3>
        <ChallengeCardsWrapper data={challengesData} shortDesc={true} />
        <button className="see-all-button button positive">See all</button>
      </section>
     }
    </>
  )
}

export default Profile




