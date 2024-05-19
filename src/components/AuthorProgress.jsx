import React from 'react'
//components
import Info from './Info';
//css
import '../assets/css/author-progress.css'
import '../assets/css/mobile-large/author-progress.css'

function AuthorProgress({progressParcentage,authorLevel,authorXp}) {
  return (
    <div className="author-progress flex-cm">
    <h3 className="title">Progress</h3>
    <div role='progressbar' style={{ "--value": progressParcentage }}></div>
    <Info name='Level' value={`${authorLevel} / 10`} />
    <Info name='Xp' value={`${authorXp} / 1000`} />
  </div>
   
  )
}

export default AuthorProgress
