const util = {
 /**
  * String Utility
  */
 string: {
  /**
   * Convert letter cases to each other
   * @example convert CamelCase to snake-case
   */
  case: {
   /**
    * Convert Camel Case to Kebab Case
    *
    * @param {string} str
    * @return string
    */
   camelToKebab(str) {
    const upperCaseRegex = /(?=[A-Z])/;

    let result = str.split(upperCaseRegex);
    result = result.map(s => s.toLowerCase());
    result = result.join('-');

    return result;
   }
  },
 },
 /**
  * Check if param is string
  * @param {*} param
  */
 isString(param) {
  return typeof param === 'string';
 },
 /**
  * Check if param is function
  * @param {*} param
  */
 isFunction(param) {
  return typeof param === 'function';
 }
}

export default util;