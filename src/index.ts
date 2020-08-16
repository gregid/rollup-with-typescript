import { EvenNumbers } from './numbers';
import { Person } from './person';

console.log(" use of Typescript with rollup ");
console.log(`Person first name is: ${Person.firstName}, last name is ${Person.lastName} `);

console.log("invoking underscore js -- third party library ")
let evn: EvenNumbers = new EvenNumbers();
console.log(evn.filterdata());
console.log(evn.pluckData());
