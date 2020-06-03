export class AssignedObject {
  /**
   * Assign properties to the object passed by param.
   * `forceAssign` is used to not remove the class' optional properties.
   */
  assign(object: any, forceAssign = false) {
    const paramsToDelete = [];
    if (!forceAssign) {
      for (const param in object) {
        if (object.hasOwnProperty(param) && !this.hasOwnProperty(param)) {
          paramsToDelete.push(param);
        }
      }
    }
    Object.assign(this, object);
    for (const param of paramsToDelete) {
      delete this[param];
    }
    this.afterAssign();

    return this;
  }

  /**
   *  Hook when the object finished assignment.
   *  It would have to be overriden by child class
   */
  protected afterAssign() {
    // It would have to be overriden by child class
  }
}
