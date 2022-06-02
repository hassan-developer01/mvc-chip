import DomCSS from "./dom/DomCSS";
import DomAttributes from "./dom/DomAttributes";
import DomDataset from "./dom/DomDataset";
import MicroDom from "./dom/MicroDom";
import util from "../../util/util";
import View from "./View";

class ViewBase {
  /**
   * Selector of this element, If is set undefined then there is no selector
   * @type {string}
   * @protected
   */
  _selector = undefined;

  /**
   * The dom of this view object
   * @type {HTMLElement}
   * @protected
   */
  _element = undefined;

  /**
   * Manage dom
   *
   * @type {MicroDom}
   */
  dom = undefined;

  /**
   * CSS object to edit this element's style
   *
   * @type {DomCSS}
   */
  css = undefined;

  /**
   * Manage attributes of this element
   *
   * @type {DomAttributes}
   */
  attr = undefined;

  /**
   * Manage dataset
   *
   * @type {DomDataset}
   */
  dataset = undefined;

  /**
   * @constructor
   * @param {string} selector The ID of existing element or create new element
   */
  constructor(selector = undefined) {
    this.dom = new MicroDom(this);
    this.css = new DomCSS(this);
    this.attr = new DomAttributes(this);
    this.dataset = new DomDataset(this);
  }

  /**
   * Create this view element
   * @param {keyof HTMLElementTagNameMap} tagName
   */
  create(tagName) {
    this._element = document.createElement(tagName);
  }

  /**
   * Make element and set operation of it
   * @param {keyof HTMLElementTagNameMap} tagName
   * @param {(parent: View|ViewBase, element: View) => void} callback
   */
  make(tagName, callback) {
    const view = new View();

    view.create(tagName);

    callback(this, view);
  }

  /**
   * Base render view with callback that provided before
   *
   * @param {(view: ViewBase) => HTMLElement} callback
   * @return HTMLElement
   */
  baseRender(callback) {
    if (util.isFunction(callback)) callback(this);
  }

  /**
   * Set specific event to dom
   *
   * @template {keyof HTMLElementEventMap} T
   * @param {T} eventType
   * @param {(event: HTMLElementEventMap[T]) => void} eventCallback
   * @param {EventListenerOptions | boolean} [options]
   */
  on(eventType, eventCallback, options = false) {
    if (this._element) {
      this._element.addEventListener(eventType, eventCallback);
    }
  }

  /**
   * Remove specific event from dom
   *
   * @template {keyof HTMLElementEventMap} T
   * @param {T} eventType
   * @param {(event: HTMLElementEventMap[T]) => void} eventCallback
   * @param {EventListenerOptions | boolean} [options]
   */
  off(eventType, eventCallback, options = false) {
    if (this._element) {
      this._element.removeEventListener(eventType, eventCallback);
    }
  }

  /**
   * Check if element exists
   * @readonly
   * @return {boolean}
   */
  get #elementExist() {
    return this._element instanceof HTMLElement;
  }

  /**
   * Get classList object of this element
   * @readonly
   * @return {DOMTokenList}
   */
  get classList() {
    if (this._element instanceof HTMLElement) return this._element.classList;
  }

  /**
   * Get current class name
   *
   * @readonly
   * @return string
   */
  get className() {
    if (this.#elementExist) return this._element.className;

    return '';
  }

  /**
   * Get ID of this element
   *
   * @return {string}
   */
  get id() {
    if (this.#elementExist) return this._element.id;

    return '';
  }

  /**
   * Get element of this
   *
   * @return {HTMLElement}
   */
  get element() {
    return this._element;
  }

  /**
   * Set new classname
   * @param {string} className
   */
  set className(className) {
    if (this.#elementExist) this._element.className = className;
  }

  /**
   * Set new ID
   * @param {string} ID
   */
  set id(ID) {
    if (this.#elementExist) this._element.id = ID;
  }

  /**
   * Set selector
   *
   * @param {string} selector
   */
  set selector(selector) {
    this._selector = selector;
    this._element = document.getElementById(this._selector);
  }
}

export default ViewBase