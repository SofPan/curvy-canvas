// const readline = require('readline');

class Person {
  constructor(weight, height, age, gender) {
    this.weight = weight;
    this.height = height;
    this.age = age;
    this.gender = gender;
  }
}

const convertCMtoM = cm => cm / 100;

const round = num => Math.round(num);

const convertImperialToMetric = person => {
  const convertedPerson = {};
  for (const metric in person) {
    convertedPerson[metric] = person[metric];
  }
  convertedPerson.height = convertedPerson.height * 2.54;
  convertedPerson.weight = convertedPerson.weight / 2.205;
  return convertedPerson;
};

// Using the Mifflin-St Jeor Equation for BMR (metric)
const calculateBMR = (person) => {
  const mainCalculation = (10 * person.weight) + (6.25 * person.height) - (5 * person.age);
  if (person.gender === "man") {
    return round(mainCalculation + 5);
  }
  return round(mainCalculation - 161);
};


const calculateBMI = (person) => {
  const meterHeight = convertCMtoM(person.height);
  return (person.weight / (meterHeight * meterHeight)).toFixed(2);
};

const maleMetrics = new Person(81.65, 190.5, 37, "man");
const femaleMetrics = new Person(88.45, 170.18, 34, "woman");

const imperialMaleMetrics = new Person(180, 75, 37, "man");
const imperialFemaleMetrics = new Person(195, 67, 34, "woman");

// TESTS for Metric measurements
// console.log(calculateBMR(maleMetrics)); // => 1827
// console.log(calculateBMR(femaleMetrics)); // => 1617

// console.log(calculateBMI(maleMetrics)); // => 22.5
// console.log(calculateBMI(femaleMetrics)); // => 30.5

// TESTS for Imperial measurements
console.log(calculateBMR(convertImperialToMetric(imperialMaleMetrics))); // => 1827
console.log(calculateBMR(convertImperialToMetric(imperialFemaleMetrics))); // => 1617

console.log(calculateBMI(convertImperialToMetric(imperialMaleMetrics))); // => 22.5
console.log(calculateBMI(convertImperialToMetric(imperialFemaleMetrics))); // => 30.5