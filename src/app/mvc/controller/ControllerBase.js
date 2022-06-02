import View from "../view/View";
import Model from "../model/Model";

class ControllerBase {
  /**
   * Name of this controller
   *
   * @type {string}
   */
  get name() {
    return this.constructor.name;
  }

  /**
   * Model of the controller
   *
   * @type {Model|ModelList}
   * @protected
   */
  #model = undefined;

  /**
   * View of the controller
   * @type {View}
   * @protected
   */
  #view = undefined;

  /**
   * Parent of this controller
   * @type {Controller}
   */
  parent = undefined;

  /**
   * Children of this controller
   * @type {Controller[]}
   */
  children = [];

  /**
   * Default data for model
   */
  constructor() {
    this.view = new View();
    this.model = new Model(undefined);
  }

  /**
   * Add controller
   *
   * @param {Controller} controller
   */
  addController(...controller) {
    this.children.push(...controller);
  }

  /**
   * Called when view rendered
   * @param view
   */
  onRender(view) {}

  /**
   * Get view
   * @return {View}
   */
  get view() {
    return this.#view;
  }

  /**
   * Set view
   * @param {View} view
   */
  set view(view) {
    this.#view = view;
  }

  /**
   * Get model
   * @return Model|ModelList
   */
  get model() {
    return this.#model;
  }

  /**
   * Set model
   * @param {Model|ModelList} model
   */
  set model(model) {
    this.#model = model;
  }
}

export default ControllerBase