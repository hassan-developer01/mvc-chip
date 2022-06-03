import ModelBase from "./ModelBase";

export class ModelList extends ModelBase {
  /**
   * @desc Array of data
   * @type {[]}
   */
  get data() {
    return this.get();
  }

  constructor() {
    super([]);
  }

  /**
   * @desc Add new item to list
   * @param item
   *
   * @return number
   */
  add(item) {
    const updatedData = this.data.concat(JSON.parse(JSON.stringify(item)));

    this.set(updatedData);

    return this.data.length;
  }

  /**
   * @desc Get item if exist
   *
   * @param {number | string} id
   */
  read(id) {
    return this.data.filter(item => item.id === id)[0];
  }

  /**
   * Update item if exist
   * @param {number} id
   * @param {(item: *) => void} callback
   */
  update(id, callback) {
    const item = this.data.find(item => item.id === id);

    if (item) {
      callback(item);
      this.set(this.data);
    }
  }

  /**
   * @desc Remove an item from data
   * @param {number | string} id
   */
  remove(id) {
    this.set(this.data.filter(item => item.id !== id));
  }

  /**
   * Get list length
   * @return {number}
   */
  get length() {
    return this.data.length;
  }

}

export default ModelList;