class DomBase {
  /**
   * ViewBase of this object
   *
   * @protected
   * @type {ViewBase}
   */
  _base = undefined;

  /**
   * Element we want to style it
   *
   * @protected
   * @type {HTMLElement}
   */
  get _element() {
    return this._base.element;
  }

  /**
   * @constructor
   * @param {ViewBase} viewBase
   */
  constructor(viewBase) {
    this._base = viewBase;
  }

  /**
   * Check if element exist
   * @return {boolean}
   * @protected
   */
  _elmExist() {
    return this._element instanceof HTMLElement;
  }
}

export default DomBase