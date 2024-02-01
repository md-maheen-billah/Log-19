const numbers = [12, 98, 5, 41, 23, 78, 46];
const evenNumbers = [];
for (const number of numbers) {
  if (number % 2 === 0) {
    evenNumbers.push(number);
  }
}
console.log(evenNumbers);
// PS C:\Projects\Log-19> node practice2.js
// [ 12, 98, 78, 46 ]
