const colors = ["red", "blue", "green", "yellow", "orange"];
const rev_colors = [];
for (const color of colors) {
  rev_colors.unshift(color);
}
console.log(rev_colors);
// PS C:\Projects\Log-19> node practice1.js
// [ 'orange', 'yellow', 'green', 'blue', 'red' ]
