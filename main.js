import User, { printName as printUserName, printAge } from '/user.js'

const user = new User('Bob', 11)
console.log(user);
printUserName(user);
printAge(user);


const companies = [
  { name: "Comapny One", category: "Finance", start: 1981, end: 2952 },
  { name: "Comapny Two", category: "Retail", start: 1992, end: 2070 },
  { name: "Comapny Three", category: "Auto", start: 1987, end: 2003 },
  { name: "Comapny Four", category: "Retail", start: 1891, end: 2000 },
  { name: "Comapny Five", category: "Technology", start: 2001, end: 2200 },
  { name: "Comapny Six", category: "Retail", start: 1931, end: 2001 },
  { name: "Comapny Seven", category: "Auto", start: 1987, end: 2443 },
  { name: "Comapny Eight", category: "Finance", start: 1989, end: 2073 },
  { name: "Comapny Nine", category: "Technology", start: 1988, end: 2043 },
  { name: "Comapny Ten", category: "Finance", start: 1989, end: 2013 },
];

const ages = [33, 12, 20, 16, 5, 54, 12, 21, 44, 61, 13, 15, 45, 25, 64, 32];


// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }
// forEach
companies.forEach(function (company) {
  console.log(company);
  console.log(company.name);
});

// filter get 21 and older
// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//   if(ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }

// const canDrink = ages.filter(function (age) {
//   if (age >= 21) {
//     return true;
//   }
// })

const canDrink = ages.filter(age => age >= 21);

console.log(canDrink);

// Filter retail companies
// const retailCompanies = companies.filter(function (company) {
//   if (company.category === 'Retail') {
//     return true;
//   }
// });

const retailCompanies = companies.filter(company => company.category === 'Retail');

console.log(retailCompanies);

// Get 80s companies

const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));

console.log(eightiesCompanies);

// Get companies that lasted 10 years or more
const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));
console.log(lastedTenYears);


// map (create new array from current array)
// Create array of company names
// const companyNames = companies.map(function (company) {
//   return company.name;
// });

// const testMap = companies.map(function (company) {
//   return `${company.name} [${company.start} - ${company.end}]`;
// })

const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
console.log(testMap);

const agesSquare = ages.map(age => Math.sqrt(age));
console.log(agesSquare);

const agesTimesTwo = ages.map(age => (age * 2));
console.log(agesTimesTwo);

const ageMap = ages
  .map(age => Math.sqrt(age))
  .map(age => age * 2);
console.log(ageMap);

// const sortedCompanies = companies.sort(function (c1, c2) {
//   if (c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });


const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
console.log(sortedCompanies);

// Sort ages
const sortAges = ages.sort((a, b) => a - b);
console.log(sortAges);


// reduce
// let ageSum = 0;
// for (let i = 0; i < ages.length; i++) {
//   ageSum += ages[i];
// }

// const ageSum = ages.reduce(function (total, age) {
//   return total + age;
// }, 0);

const ageSum = ages.reduce((total, age) => total + age, 0);
console.log(ageSum);

// Get total years for all companies
// const totalYears = companies.reduce(function (total, company) {
//   return total + (company.end - company.start);
// }, 0);

const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0)
console.log(totalYears);

// Combine Methods
const combined = ages
  .map(age => age * 2)
  .filter(age => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);

console.log(combined);
