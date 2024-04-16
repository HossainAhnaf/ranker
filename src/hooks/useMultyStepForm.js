import { useState } from 'react'
export default function useMultyStepForm(stepElements) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const nextStep = () => {
    if (currentStepIndex < stepElements.length - 1) 
    setCurrentStepIndex(currentStepIndex + 1)
  }

  const prevStep = () => {
    if (currentStepIndex > 0) 
    setCurrentStepIndex(currentStepIndex - 1) 
  }
  return {
    currentStepIndex,
     stepElement:stepElements[currentStepIndex],
    nextStep,
    prevStep
  }
} 