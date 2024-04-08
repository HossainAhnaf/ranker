import React from 'react'
//components

import ActivityRow from './ActivityRow';
//css
import '../../assets/css/challenges-activity.css'
import '../../assets/css/mobile-large/challenges-activity.css'
function ChallengesActivity({shortView}) {
  
  return (
    <div className="challenges-activity ">
    <h3 className="title">Challenges Activity</h3>  
    <ActivityRow headActivityData={{name:"Total Submited",value:"100"}} shortView={shortView}/>
    <ActivityRow headActivityData={{name:"Passed",value:"80"}} shortView={shortView}/>
    <ActivityRow headActivityData={{name:"Failed",value:"20"}} shortView={shortView}/>

   </div>
  )
}

export default ChallengesActivity

   /* <Info name='Total' value={authorChallenges} />
   <Info name='Passed' value={authorPassed} />
   <Info name='Failed' value={authorFailed} /> */