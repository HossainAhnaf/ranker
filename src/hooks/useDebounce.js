/**
 * Hook that debounces a function.
 *
 * @param {function} fn - The function to be debounced.
 * @param {number} delay - The delay in milliseconds.
 * @return {function} - The debounced function.
 */
function useDebounce(fn, delay) {
  // Variable to store the timeout ID.
  let timeout = null;

  /**
   * Debounced function that will be returned.
   * When called, it will clear the previous timeout and
   * set a new one.
   */
  return () => {
    // If there is a previous timeout, clear it.
    if (timeout) clearTimeout(timeout);

    // Set a new timeout that will call the function after the delay.
    timeout = setTimeout(fn, delay);
  };
}

  export default useDebounce