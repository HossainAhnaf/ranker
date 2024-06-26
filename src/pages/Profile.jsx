//modules
import React, { useEffect, useMemo, useState } from 'react';
import dummyRecentChallengesData from '../data/recentChallengesData.json'
import useSetValueFromStart from '../hooks/useSetValueFromStart'
import { useNavigate, useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

//fake
import { singleUser } from '../data/usersData.json'
//components
import ProfileEditForm from '../components/ProfileEditForm/ProfileEditForm';
import UserAvatar from '../components/UserAvatar';
import ChallengesActivity from '../components/ChallengesActivity/ChallengesActivity';
import AuthorProgress from '../components/AuthorProgress';
import ChallengeCardsWrapper from '../components/ChallengeCardsWrapper';
import Icon from 'react-inlinesvg';
//svg
import pencilSvg from '../assets/svg/pencil.svg';
import facebookSvg from '../assets/svg/facebook.svg';
import twitterSvg from '../assets/svg/twitter.svg';
import googleSvg from '../assets/svg/google.svg';
import linkedinSvg from '../assets/svg/linkedin.svg';
//css
import '../assets/css/profile.css';
import '../assets/css/mobile-large/profile.css';
import '../assets/css/tablet/profile.css';
// import '../assets/css/laptop/profile.css';
import'../assets/css/level-titles-progress.css';


function Profile() {
  const params = useParams()
  const navigate = useNavigate()
  const {
    username,
    name,
    avatar,
    rank, status,
    challenges,
    passed,
    failed,
    level,
    xp } = useSelector(state => state.userSlice)

  const isAuthor = (username === params.username || params.username === 'me')
  const [isProfileEditFormVisible, setIsProfileEditFormVisible] = useState(false)

  const [challengesData, setChallengesData] = useState(dummyRecentChallengesData)

  const [authorUsername, setAuthorUsername] = useState(username)
  const [authorName, setAuthorName] = useState(name)
  const [authorAvatar, setAuthorAvatar] = useState(avatar)
  const [authorRank, setAuthorRank] = useState(rank)
  const [authorStatus, setAuthorStatus] = useState(status)
  const [authorChallenges, setAuthorChallenges] = useState(challenges)
  const [authorPassed, setAuthorPassed] = useState(passed)
  const [authorFailed, setAuthorFailed] = useState(failed)
  const [authorLevel, setAuthorLevel] = useState(level)
  const [authorXp, setAuthorXp] = useState(xp)
  const [progressParcentage, setProgressParcentage] = useState(0)




  const fetchChallengesData = () => {
    // fetch('../data/recentChallengesData.json')
    // .then(res=>res.json())
    // .then(setChallengesData)
  }

  const numberTypeInfoIncreaceHandler = (challenges, passed, failed, level, xp) => {
    useSetValueFromStart(0, challenges, setAuthorChallenges)
    useSetValueFromStart(0, passed, setAuthorPassed)
    useSetValueFromStart(0, failed, setAuthorFailed)
    useSetValueFromStart(0, level, setAuthorLevel)
    useSetValueFromStart(0, xp, setAuthorXp)
    useSetValueFromStart(0, (xp / 1000) * 100, setProgressParcentage)
  }

  const fetchProfileData = () => {
    if (!isAuthor) {
      const { username, name, avatar, rank, status, challenges, passed, failed, level, xp } = singleUser[params.username]
      setAuthorUsername(username)
      setAuthorName(name)
      setAuthorAvatar(avatar)
      setAuthorRank(rank)
      setAuthorStatus(status)
      setAuthorChallenges(challenges)
      setAuthorPassed(passed)
      setAuthorFailed(failed)
      setAuthorLevel(level)
      setAuthorXp(xp)
      numberTypeInfoIncreaceHandler(challenges, passed, failed, level, xp)
    } else {
      setAuthorUsername(username)
      setAuthorName(name)
      setAuthorAvatar(avatar)
      setAuthorRank(rank)
      setAuthorStatus(status)
      setAuthorChallenges(challenges)
      setAuthorPassed(passed)
      setAuthorFailed(failed)
      setAuthorLevel(level)
      setAuthorXp(xp)
      numberTypeInfoIncreaceHandler(challenges, passed, failed, level, xp)
    }
  }

  useEffect(() => {
    fetchProfileData()
    if (isAuthor)
      fetchChallengesData()
  }, [params])



  return (
    <div className="profile">
      <section className="info-section flex-cm center">
        <div className="primary flex-cm center">

          <div className="user-primary-info-wrapper flex-rw">
            <div className="image-side">
              <UserAvatar avatar={authorAvatar} status={authorStatus} level={authorLevel} />
            </div>
            <div className="text-side flex-cm">
              <h3 className="name">{authorName}</h3>
              <small className='username'>@{authorUsername}</small>
              <small className={`status ${authorStatus.toLowerCase()}`}>{authorStatus}</small>
              <p className="rank">Rank {rank}</p>
            </div>

          </div>
          {isAuthor &&
            <button className="profile-edit-button positive button flex-rw center button" onClick={() => navigate('/settings')}>
              <div className="svgCont flex-rw center">
                <Icon src={pencilSvg} />
              </div>
              <span>Edit Profile</span>
            </button>
          }
          <div className="user-social-accounts-wrapper flex-cm">
          <a href="#" className="social-account flex-rw bottom button">
              <Icon src={facebookSvg} />
              <p>{username}</p>
            </a>
            <a href="#" className="social-account flex-rw bottom button">
              <Icon src={twitterSvg} />
              <p>{username}</p>
            </a>
           
          </div>
        </div>
        <hr />
        <ChallengesActivity />
        <hr />
        <AuthorProgress authorLevel={authorLevel} authorXp={authorXp} progressParcentage={progressParcentage} />
      </section>
      {
        isProfileEditFormVisible &&
        <ProfileEditForm setIsProfileEditFormVisible={setIsProfileEditFormVisible} />
      }
      {
        isAuthor &&
        <>
        <section className="level-titles-progress">
          <h3 className="title">Level titles</h3> 
         <div className="level-title-wrapper">
          <div className="level-title">
            <span className="name">Blpha</span>
            <div className="line"></div>
          </div>
          <div className="level-title">
            <span className="name">Blpha</span>
            <div className="line"></div>
          </div>
          <div className="level-title">
            <span className="name">Blpha</span>
            <div className="line"></div>
          </div>
          <div className="level-title">
            <span className="name">Blpha</span>
            <div className="line"></div>
          </div>
          <div className="level-title">
            <span className="name">Blpha</span>
            <div className="line"></div>
          </div>
          <div className="level-title">
            <span className="name">Blpha</span>
            <div className="line"></div>
          </div>
         </div>

        </section>
        <section className="recent-challenges flex-cm">
          <div className="top-nav flex-rw">
            <h3 className='title'>Recent Challenges</h3>
            <Link to='/challenges' className="see-all-button button ">See all</Link>
          </div>
          <ChallengeCardsWrapper data={challengesData} shortDesc={true} />
        </section>
        </>
      }
    </div>
  )
}

export default Profile




