// const readline = require('readline');

class Person {
  constructor(weight, height, age, gender) {
    this.weight = weight;
    this.height = height;
    this.age = age;
    this.gender = gender;
  }
}

const convertCMtoM = (cm) => {
  return cm / 100;
};

const round = (num) => {
  return Math.round(num);
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

// console.log(calculateBMR(maleMetrics));
// console.log(calculateBMR(femaleMetrics));

console.log(calculateBMI(maleMetrics)); // => 22.5
console.log(calculateBMI(femaleMetrics)); // => 30.5