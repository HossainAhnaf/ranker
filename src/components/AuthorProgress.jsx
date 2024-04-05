import React from 'react'

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
