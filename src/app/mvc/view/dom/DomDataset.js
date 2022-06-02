import DomBase from "./DomBase";

class DomDataset extends DomBase {
  /**
   * Managing of dataset
   *
   * If key is string, method return the data of that key.
   * If key is not string then method return all the dataset as an object.
   * If key is string and value is string then set value for that key.
   * If first param is object then set the bunch of keys and values.
   *
   * @param {string|object} key
   * @param {*} value
   */
  data(key, value) {
    if (key === undefined) {
      return this.dataset;
    }

    if (typeof key === 'string') {
      if (value === undefined) {
        return this.dataset[key];
      }

      return this.#keyValueDataset(key, value);
    }

    return this.#objectDataset(key);
  }

  /**
   *
   * @param {string} key
   * @param {*} value
   * @return {undefined|{}}
   */
  #keyValueDataset(key = '', value = undefined) {
    if (!this._elmExist()) {
      return undefined;
    }

    const dataset = this._element.dataset;

    if (!key) {
      return dataset[key];
    }

    if (key && value) {
      return dataset[key] = `${value}`;
    }

    return this.dataset;
  }

  /**
   *
   * @param {{string: string}} obj
   */
  #objectDataset(obj) {
    if (!this._elmExist()) {
      return undefined;
    }

    const dataset = this._element.dataset;

    Object.entries(obj).forEach(([k, v]) => {
      dataset[k] = v;
    });

    return this.dataset;
  }

  /**
   * Get dataset
   *
   * @type {object}
   */
  get dataset() {
    if (!this._elmExist()) return {};

    return {...this._element.dataset};
  }
}

export default DomDataset