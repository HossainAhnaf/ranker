
/**
 * Returns the string 'active' if isActive is true, otherwise returns an empty string.
 * This is a custom hook that can be used to conditionally add a CSS class name
 * based on a boolean value.
 *
 * @param {Object} props - An object with a single property, isActive, which is a boolean.
 * @param {boolean} props.isActive - A boolean indicating whether the active class should be returned.
 * @return {string} Returns the string 'active' if isActive is true, otherwise returns an empty string.
 */
export default function useActiveClassName({isActive},className='') {
  /**
   * The string 'active' if isActive is true, otherwise an empty string.
   * @type {string}
   */
  return isActive ? `active ${className}` : className;
}

