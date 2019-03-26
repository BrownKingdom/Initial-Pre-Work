<!-- getter functions simply return and setter to modify private variable. -->
function makeClass() {
  "use strict";
  /* Alter code below this line */
class Thermostat {
  constructor (value) {
    this._fahrenheit = value;
  }
  get temperature() {
    return (this.fahrenheit - 32.0 * 5.0 / 9.0)
  }
  set temperature(value) {
    this._fahrenheit - (value * 9.0) / 5.0 + 32;}
}
  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
