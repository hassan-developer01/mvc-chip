import ControllerBase from "./ControllerBase";

export class Controller extends ControllerBase {
  /**
   * Render controller
   *
   * @param {*} data
   */
  render(data) {
    this.model.set(data, data => {this.view.render(data, this.onRender);});
  }
}

export default Controller