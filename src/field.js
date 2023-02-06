// Class that represents a field in a form
class Field {

  constructor(label, type, name, required = false) {
    this.label = label;
    this.type = type;
    this.name = name;
    this.required = required;
  }

}

export default Field;
