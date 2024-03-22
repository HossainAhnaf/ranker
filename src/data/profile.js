const infoSectionRef = document.querySelector(".info-section")





const setAllInfoData = ()=> {

  // setting the  username and logo
  infoSectionRef.querySelector(".primary > .username").textContent = userData.username
  infoSectionRef.querySelector(".primary > .logoCont > img").src = userData.logo
  // setting the data of all the info of user
  for (const element of infoSectionRef.querySelectorAll(".info")) {
    const dataContainer = element.querySelector(".value > .data")
    const value = userData[element.getAttribute("data-key")]

    if (typeof value === "number")
      setValueFromStart(0, value, (updatedValue)=> {
      dataContainer.textContent = updatedValue


    })
    else
      dataContainer.textContent = value
  }

}

// setting the data of user xp progress bar


// const updateXpProgressBar = (xp)=> {
//   const oldPercent = (userData.xp / 1000) * 100
//   userData.xp += xp

//   const progressBarRef = infoSectionRef.querySelector(".xp-items-wrapper > .progress-bar")
//   const innerRef = progressBarRef.querySelector(".inner")
//   const progressRef = innerRef.querySelector(".progress")
//   const percent = (userData.xp / 1000) * 100

//   if (xp > 0)
//     progressBarRef.classList.add("increasing")
//   else
//     progressBarRef.classList.add("decreasing")

//   progressBarRef.classList.add("active")

//   setValueFromStart(oldPercent, percent, (updatedValue) => {
//     progressRef.textContent = updatedValue + '%'
//     innerRef.style.setProperty("height", updatedValue + '%')
//     if (percent === updatedValue) {
//       if (xp > 0)
//         progressBarRef.classList.remove("increasing")
//       else
//         progressBarRef.classList.remove("decreasing")

//       progressBarRef.classList.remove("active")
//     }
//   },
//     10000)
//   progressBarRef.setAttribute("data-less",
//     percent <= 10)

// }

 

/*
(function () {
  var script = document.createElement('script'); script.src = "//cdn.jsdelivr.net/npm/eruda"; document.body.appendChild(script); script.onload = function () {
    eruda.init()
  }
})();
*/
//setAllInfoData()
// setXpProgressBar()
setRecentChallengesData()