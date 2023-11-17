// const readline = require('readline');

class Person {
  constructor(weight, height, age, gender, metricOrImperial = "metric") {
    this.weight = weight;
    this.height = height;
    this.age = age;
    this.gender = gender;
    this.metricOrImperial = metricOrImperial;
    if (this.metricOrImperial === "imperial") {
      this.convertHeightFromImperialToMetric();
      this.convertWeightFromImperialToMetric();
    }
  }

  convertHeightFromImperialToMetric() {
    this.height = this.height * 2.54;
    return this.height;
  }

  convertWeightFromImperialToMetric() {
    this.weight = this.weight / 2.205;
    return this.weight;
  }

  // Using the Mifflin-St Jeor Equation for BMR (metric)
  calculateBMR() {
    const mainCalculation = (10 * this.weight) + (6.25 * this.height) - (5 * this.age);
    if (this.gender === "man") {
      return round(mainCalculation + 5);
    }
    return round(mainCalculation - 161);
  }

  calculateBMI() {
    const meterHeight = convertCMtoM(this.height);
    return (this.weight / (meterHeight * meterHeight)).toFixed(2);
  }
}

const convertCMtoM = cm => cm / 100;

const round = num => Math.round(num);

const maleMetrics = new Person(81.65, 190.5, 37, "man");
const femaleMetrics = new Person(88.45, 170.18, 34, "woman");

const imperialMaleMetrics = new Person(180, 75, 37, "man", "imperial");
const imperialFemaleMetrics = new Person(195, 67, 34, "woman", "imperial");

// TESTS for Metric measurements
console.log(maleMetrics.calculateBMR()); // => 1827
console.log(femaleMetrics.calculateBMR()); // => 1617

console.log(maleMetrics.calculateBMI()); // => 22.5
console.log(femaleMetrics.calculateBMI()); // => 30.5

// TESTS for Imperial measurements
console.log(imperialMaleMetrics.calculateBMR()); // => 1827
console.log(imperialFemaleMetrics.calculateBMR()); // => 1617

console.log(imperialMaleMetrics.calculateBMI()); // => 22.5
console.log(imperialFemaleMetrics.calculateBMI()); // => 30.5