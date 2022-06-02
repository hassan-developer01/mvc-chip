import ViewBase from "../ViewBase";
import DomBase from "./DomBase";
import util from "../../../util/util";

class MicroDom extends DomBase {
  /**
   * @constructor
   * @param {ViewBase} viewBase
   */
  constructor(viewBase) {
    super(viewBase);
  }

  /**
   * Append specific view or dom to this view
   *
   * @param {ViewBase|HTMLElement} view
   */
  append(view) {
    if (this._elmExist()) {
      if (view instanceof ViewBase) {
        view = view.element;
      }

      this._element.insertAdjacentElement('beforeend', view);
    }
  }

  /**
   * Prepend specific view or dom to this view
   *
   * @param {ViewBase|HTMLElement} view
   */
  prepend(view) {
    if (this._elmExist()) {
      if (view instanceof ViewBase) {
        view = view.element
      }

      this._element.insertAdjacentElement('afterbegin', view);
    }
  }

  /**
   * Insert specific view or dom before this view
   *
   * @param {ViewBase|HTMLElement} view
   */
  before(view) {
    if (this._elmExist()) {
      if (view instanceof ViewBase) {
        view = view.element
      }

      this._element.insertAdjacentElement('beforebegin', view);
    }
  }

  /**
   * Insert specific view or dom after this view
   *
   * @param {ViewBase|HTMLElement} view
   */
  after(view) {
    if (this._elmExist()) {
      if (view instanceof ViewBase) {
        view = view.element
      }

      this._element.insertAdjacentElement('afterend', view);
    }
  }

  /**
   * Remove this view
   */
  remove() {
    if (this._elmExist()) {
      this._element.remove();
    }
  }

  /**
   * Clear whatever content this view has
   */
  clear() {
    if (this._elmExist()) {
      this._element.innerHTML = '';
    }
  }

  /**
   * Put new content on this view
   *
   * @param {ViewBase|HTMLElement|ViewBase[]|HTMLElement[]|string} view
   */
  html(view) {
    if (this._elmExist()) {
      if (util.isString(view)) {
        this._element.innerHTML = view;
        return;
      }

      if (Array.isArray(view)) {
        this.clear();
        view.forEach(v => this.append(v));
      } else {
        this.clear();
        this.append(view);
      }
    }
  }

  /**
   * Insert text to this view
   * @param {string} body
   */
  text(body) {
    if (this._elmExist()) {
      this._element.innerText = body;
    }
  }
}

export default MicroDom