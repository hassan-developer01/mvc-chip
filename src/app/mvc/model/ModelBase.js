class ModelBase {
  /**
   * The data of this model
   *
   * @protected
   * @type {*}
   */
  #data = undefined;

  /**
   * Default value
   * @type {*}
   */
  #defaultValue = undefined;

  /**
   * Event list
   * @type {{[key: string]: (data: *) => void}}
   */
  #eventList = {};

  /**
   * @constructor
   * @param {*} data default value
   */
  constructor(data = undefined) {
    this.#data = data;
    this.#defaultValue = data;
  }

  /**
   * @desc Submit events
   * @param {string} key
   * @param {function(data)} callback
   */
  on(key, callback) {
    this.#eventList[key] = callback;
  }

  /**
   * @desc Remove specific event
   * @param {string} key
   */
  off(key) {
    delete this.#eventList[key];
  }

  /**
   * Dispatch specific event
   * @param key
   */
  dispatch(key) {
    const event = this.#eventList[key];

    if (typeof event === 'function') {
        event(this.#data);
    }
  }

  /**
   * Get back to default value
   */
  setDefault() {
    this.#data = this.#defaultValue;
  }

  /**
   * Set default value
   * @param defaultValue
   */
  setDefaultValue(defaultValue) {
    this.#defaultValue = defaultValue;
  }

  /**
   * Set new data
   * @param {*} newData
   * @param {(data: *) => void} handler
   */
  set(newData, handler = () => undefined) {
    this.#data = newData;

    this.dispatch('changed');
  }

  /**
   * Get data
   * @return {*}
   */
  get() {
    return this.#data;
  }

}

export default ModelBase