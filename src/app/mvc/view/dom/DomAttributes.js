import DomBase from "./DomBase";

class DomAttributes extends DomBase {
  /**
   * @constructor
   * @param {ViewBase} viewBase
   */
  constructor(viewBase) {
    super(viewBase);
  }
  
  /**
   * Set new attribute
   *
   * @param {string} attr
   * @param {string} value
   */
  set(attr, value) {
    if (typeof value !== 'string') {
      value = '';
    }

    if (this._elmExist()) {
      this._element.setAttribute(attr, value);
    }
  }

  /**
   * Get attribute
   *
   * @param {string} attr
   * @return {string | null}
   */
  get(attr) {
    return this._elmExist() && this._element.getAttribute(attr);
  }

  /**
   * Does it have specific attribute
   *
   * @param {string} attr
   * @return boolean
   */
  has(attr) {
    return this._elmExist() && this._element.hasAttribute(attr);
  }

  /**
   * Remove attribute if it does exist
   *
   * @param {string} attr
   */
  remove(attr) {
    if (this._elmExist()) {
      this._element.removeAttribute(attr);
    }
  }

}

export default DomAttributes