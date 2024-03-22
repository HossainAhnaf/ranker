
const filterOptionClickHandler = ({currentTarget})=>{
  
 const dropDownRef = currentTarget.parentElement.querySelector(".drop-down")

  if (dropDownRef.classList.contains("active")){
     dropDownRef.classList.remove("active")
  }else{
       dropDownRef.classList.add("active")
       dropDownRef.focus()
    
       dropDownRef.onblur = () => {
       setTimeout(()=>dropDownRef.classList.remove("active"),0)
       }
  }

  
}

