
/**
 * useSetValueFromStart is a custom hook that gradually sets a value from a start value to a target value
 * and calls a callback function with the updated value at each interval.
 *
 * @param {number} startValue - The initial value.
 * @param {number} value - The target value.
 * @param {function} callback - The function to be called with the updated value at each interval.
 * @param {number} [timing=5000] - The time interval at which the value is updated.
 */
 
export default function useSetValueFromStart(startValue = 0, value, callback, timing = 5000) {
  // Initialize the current value to the start value.
  let currentVal = startValue;

  // Calculate the time interval based on the target value.
  timing = timing / (value * 2);

  // Create an interval that gradually updates the value from the start value to the target value.
  const interval = setInterval(() => {
    // If the current value reaches the target value, clear the interval.
    if (currentVal === value) {
      clearInterval(interval);
    } else {
      // Update the current value by adding 1 if the start value is less than the target value, or subtracting 1 otherwise.
      currentVal = startValue < value ? currentVal + 1 : currentVal - 1;
      // Call the callback function with the updated value.
      callback(currentVal);
    }
  }, timing);

  return interval
  
}
 