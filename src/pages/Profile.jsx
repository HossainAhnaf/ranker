//modules
import React, { useEffect, useMemo, useState } from 'react';
import userDummyData from '../data/userData.json'
import dummyRecentChallengesData from '../data/recentChallengesData.json'
import useSetValueFromStart from '../hooks/useSetValueFromStart'

//components
import UserLogo from '../components/UserLogo';
import ChallengeCardsWrapper from '../components/ChallengeCardsWrapper';
import Info from '../components/Info';


//css
import '../assets/css/profile.css';

function Profile() {

  const [userData, setUserData] = useState(userDummyData)
  const [challengesData, setChallengesData] = useState(dummyRecentChallengesData)

  const progressParcentage = useMemo(() => (userData.xp / 1000) * 100, [userData.xp])

  const [progressParcentageText, setProgressParcentageText] = useState(0)

  const [lessThan10Percent, setLessThan10Percent] = useState('true')


  const [challenges, setChallenges] = useState(0)
  const [passed, setPassed] = useState(0)
  const [failed, setFailed] = useState(0)
  const [level, setLevel] = useState(0)
  const [xp, setXp] = useState(0)


  useEffect(() => {
    const fetchUserData = () => {
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
      useSetValueFromStart(0, userData.challenges, setChallenges)
      useSetValueFromStart(0, userData.passed, setPassed)
      useSetValueFromStart(0, userData.failed, setFailed)
      useSetValueFromStart(0, userData.level, setLevel)
      useSetValueFromStart(0, userData.xp, setXp)
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
          <UserLogo logoSrc={userData.logoSrc} rank={userData.rank} level={userData.level} />
          <h3 className="username">{userData.username}</h3>
        </div>
        <Info name='Rank' value={userData.rank} />
        <Info name='Status' value={userData.status} />
        <Info name='Challenges' value={challenges} />
        <Info name='Passed' value={passed} />
        <Info name='Failed' value={failed} />
     
    
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
        <Info name='Level' value={`${level} / 10`} />
        <Info name='Xp' value={`${xp} / 1000`} />
      </section>


      <section className="recent-challenges flex-cm">
        <h3>Recent Challenges</h3>
        <ChallengeCardsWrapper data={challengesData} shortDesc={true} />
        <button className="see-all-button button positive">See all</button>
      </section>

    </>
  )
}

export default Profile




