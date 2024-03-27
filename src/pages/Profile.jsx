//modules
import React, { useEffect, useMemo, useState } from 'react';
import dummyRecentChallengesData from '../data/recentChallengesData.json'
import useSetValueFromStart from '../hooks/useSetValueFromStart'
import { useParams } from 'react-router';

//components
import UserLogo from '../components/UserLogo';
import ChallengeCardsWrapper from '../components/ChallengeCardsWrapper';
import Info from '../components/Info';


//css
import '../assets/css/profile.css';

function Profile() {
   const adminUsername = useParams().username
   
  const {username} = useSelector(state=>state.userSlice)

  const [challengesData, setChallengesData] = useState(dummyRecentChallengesData)


  const progressParcentage = useMemo(() => (xp / 1000) * 100, [xp])
  const [progressParcentageText, setProgressParcentageText] = useState(0)
  const [lessThan10Percent, setLessThan10Percent] = useState('true')

  
  const [authorName,setAuthorName] = useState()
  const [authorLogoSrc,setAuthorLogoSrc] = useState()
  const [authorRank,setAuthorRank] = useState()
  const [authorStatus,setAuthorStatus] = useState()
  const [authorChallenges,setAuthorChallenges] = useState()
  const [authorPassed,setAuthorPassed] = useState()
  const [authorFailed,setAuthorFailed] = useState()
  const [authorLevel,setAuthorLevel] = useState()
  const [authorXp,setAuthorXp] = useState()
   

  const [currentChallenges, setCurrentChallenges] = useState(0)
  const [currentPassed, setCurrentPassed] = useState(0)
  const [currentFailed, setCurrentFailed] = useState(0)
  const [currentLevel, setCurrentLevel] = useState(0)
  const [currentXp, setCurrentXp] = useState(0)


  useEffect(() => {
    const fetchProfileData = () => {
      // fetch('')
      // .then(res=>res.text())
      // .then(setUserData)
    }
    const fetchChallengesData = () => {
      // fetch('../data/recentChallengesData.json')
      // .then(res=>res.json())
      // .then(setChallengesData)
    }
    const numberTypeInfoIncreaceHandler = () => {
      useSetValueFromStart(0,currentChallenges,setCurrentChallenges)
      useSetValueFromStart(0,currentPassed, setCurrentPassed )
      useSetValueFromStart(0,currentFailed , setCurrentFailed )
      useSetValueFromStart(0,currentLevel,setCurrentLevel )
      useSetValueFromStart(0,currentXp,setCurrentXp)
    }

    const setXpProgressBarData = () => {
      useSetValueFromStart(0, progressParcentage, (updatedValue) => {
        setProgressParcentageText(updatedValue)
      })
      setLessThan10Percent(progressParcentageText <= 10 ? 'true' : 'false')

    }
    fetchUserData()
    fetchChallengesData()
    numberTypeInfoIncreaceHandler()
    setXpProgressBarData()
  }, [])


  return (
    <>
      <section className="info-section flex-cm center">
        <div className="primary flex-cm center">
          <UserLogo logoSrc={authorLogoSrc} status={authorStatus} level={authorLevel} />
          <h3 className="name">{name}</h3>
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
    username === adminUsername &&
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




