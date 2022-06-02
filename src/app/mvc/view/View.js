import ViewBase from "./ViewBase";

class View extends ViewBase {
  /**
   * @constructor
   * @param {string} selector
   */
  constructor(selector = undefined) {
    super();

    if (selector) this.selector = selector;
  }

  /**
   * Render view with callback that provided before
   *
   * @param {*} data
   * @param {(view: ViewBase) => HTMLElement} callback
   * @return HTMLElement
   */
  render(data, callback = undefined) {
    super.baseRender(callback);
  }
}

export default View;