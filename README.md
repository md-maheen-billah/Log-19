# Log 19 (Duration: 6 Months)
Today's lesson focused on array traversal using For and While loop, reversing an array with/without reverse method and sorting arrays.

---

### Practice Task-1:
Write a JavaScript code to reverse the array colors `without using the reverse method`.
```js
const colors = ["red", "blue", "green", "yellow", "orange"];
const rev_colors = [];
for (const color of colors) {
  rev_colors.unshift(color);
}
console.log(rev_colors);
// PS C:\Projects\Log-19> node practice1.js
// [ 'orange', 'yellow', 'green', 'blue', 'red' ]

```
---
### Practice Task-2:
Write a JavaScript code to get the even numbers from an array using any looping technique.
```js
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

```
---
### Practice Task-3:
Use a for...of loop to concatenate all the elements of an array into a single string.
```js
var numbers = ["Tom", "Tim", "Tin", "Tik"];
let str = "";
for (const number of numbers) {
  str += number;
}
console.log(str);
// PS C:\Projects\Log-19> node practice3.js
// TomTimTinTik


```
---
### Practice Task-4:
Reverse the words of a sentence. Only the position of the word will be reversed. check out the output
```js
const statement = "I am a hard working person";
const statementArray = statement.split(" ");
const rev_statement = [];
for (const words of statementArray) {
  rev_statement.unshift(words);
}
console.log(rev_statement.join(" "));
// PS C:\Projects\Log-19> node practice4.js
// person working hard a am I


```
---
