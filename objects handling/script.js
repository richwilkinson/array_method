const companies = [
    {name: "company one", category: "Finance", start: 1981, end: 2000},
    {name: "company two", category: "News", start: 1999, end: 2009},
    {name: "company three", category: "Sports", start: 2009, end: 2020},
    {name: "company four", category: "Health", start: 1990, end: 1996},
    {name: "company five", category: "Agriculture", start: 2007, end: 2012},
    {name: "company six", category: "Labor", start: 1990, end: 1991},
    {name: "company seven", category: "Law", start: 1999, end: 2012}
];

const ages = [32, 44, 45, 60, 19, 90, 33, 45, 38, 29, 19];

//for loop
// for(let i = 0; i< companies.length; i++) {
//     console.log(companies[i]);
// };

//forEach
// companies.forEach(function(company) {
//     console.log(company)
// })

//filter
// let canDrink = [];
// for(let i = 0; i < ages.length; i++) {
//     if(ages[i] >= 21) {
//         canDrink.push(ages[i]);
//     }
// }
// console.log(canDrink)

// const canDrink = ages.filter(function(age) {
//     if(ages >= 21) {
//         return true;
//     }
// });

//Filter
const canDrink = ages.filter(age => age >= 21);

console.log(canDrink)


const agCompanies = companies.filter(company => company.category === "Agriculture")
console.log(agCompanies);

const companyYear = companies.filter(company => company.start >= 1990)
console.log(companyYear);

const ninetiesCompanies = companies.filter(company => company.start >= 1990 && company.start <= 1999)
console.log(ninetiesCompanies);

const tenYear = companies.filter(company => (company.end - company.start >= 10))
console.log(tenYear)

//Map

const companyNames = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);

console.log(companyNames)

const ageMap = ages

.map(age => Math.sqrt(age))
.map(age => age * 2);

console.log(ageMap);

//Sort

const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1))
console.log(sortedCompanies)

const sortAges = ages.sort((a, b) => a - b);

console.log(sortAges);

// Reduce 

const ageSum = ages.reduce((total, age) => total + age, 0);
console.log(ageSum)

const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0)
console.log(totalYears)

// Combine Methods

const combined = ages
.map(age => age * 2)
.filter(age => age >= 40)
.sort((a, b) => a - b)
.reduce((a, b) => a + b, 0)

console.log(combined)