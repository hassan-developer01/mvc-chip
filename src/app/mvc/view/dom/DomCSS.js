import DomBase from "./DomBase";
import util from "../../../util/util";

class DomCSS extends DomBase {
  /**
   * Get style of dom
   *
   * @type {CSSStyleDeclaration}
   */
  get #css() {
    return this._element.style;
  }

  /**
   * @constructor
   * @param {ViewBase} viewBase
   */
  constructor(viewBase) {
    super(viewBase);
  }

  /**
   * Set specific single style to this element
   *
   * @param {string} key
   * @param {*} value
   */
  single(key, value) {
    if (typeof value !== 'string') {
      return this.get(key);
    }

    if (this._element) {
      key = util.string.case.camelToKebab(key);
      this.#css.setProperty(key, value);
    }
  }

  /**
   * Set an object of style
   * @param {Object<string, string>} obj
   */
  some(obj) {
    Object.entries(obj).forEach(([k, v]) => {
      k = util.string.case.camelToKebab(k);

      this.single(k, v);
    });
  }

  /**
   * Retrieve specific css item if exist
   * @param {string|undefined} key
   * @return {undefined|Object<CSSStyleDeclaration, string>|string}
   */
  get(key= undefined) {
    key = util.string.case.camelToKebab(key);

    return this._element ?
      (!!key ? this.#css.getPropertyValue(key) : this.#cssObject) : undefined
  }

  /**
   * Remove specific css item if it does exist
   *
   * @param {string} key
   * @return {undefined|string}
   */
  remove(key) {
    if (!this._element) return undefined;

    key = util.string.case.camelToKebab(key);

    this.#css.removeProperty(key);
  }

  /**
   * Get css data object
   *
   * @type {Object<CSSStyleDeclaration, string>}
   */
  get #cssObject() {
    let cssText = this.#css.cssText
      .split(';')
      .filter(Boolean)
      .map(item => item.split(':'));

    let obj = {};

    cssText.forEach(([k, v]) => {
      obj[k.trim()] = v.trim();
    });

    return obj;
  }

}

export default DomCSS