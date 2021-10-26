// N220 Section 28238
// Dillon Polley
// Week 12 Lab
// My Pet Dragon
// 11/10/2020

class Dragon {
  // Constructor with arguments for the three variables we need
  constructor(name, happiness, energy) {
    // Sets up the name variable
    this._name = name;
    // Sets up the happiness variable
    this._happiness = happiness;
    // Sets up the energy variable
    this._energy = energy;
  }
  // Gets name from the name variable
  get name() {
    return this._name;
  }
  // Sets name up with data entered
  set name(data) {
    this._name = data;
  }
  // Gets name from the name variable
  get happiness() {
    return this._happiness;
  }

  set happiness(data) {
    if (data == "undefined") {
      console.trace("Tried to set an undefined value");
      return;
    }

    if (data < 0) data = 0;

    if (data > 50) data = 50;

    this._happiness = data;
  }

  get energy() {
    return this._energy;
  }

  set energy(data) {
    if (data == "undefined") {
      console.trace("Tried to set an undefined value");
      return;
    }

    if (data < 0) data = 0;

    if (data > 50) data = 50;

    this._energy = data;
  }

  feed() {
    this._energy = this._energy + 2;
    this._happiness = this._happiness - 1;
  }

  play() {
    this.energy = this.energy - 2;
    this.happiness = this.happiness + 2;
  }

  display(div, energyText, happyText) {
    if (this._energy < 35) {
      div.style.backgroundColor = "red";
    }
    if (this._energy > 35) {
      div.style.backgroundColor = "green";
    }

    energyText.innerHTML = "<br>" + "Current energy: " + this.energy;
    happyText.innerHTML = "<br>" + "Current happiness: " + this.happiness;
  }
}
