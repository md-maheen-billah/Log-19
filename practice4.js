const statement = "I am a hard working person";
const statementArray = statement.split(" ");
const rev_statement = [];
for (const words of statementArray) {
  rev_statement.unshift(words);
}
console.log(rev_statement.join(" "));
// PS C:\Projects\Log-19> node practice4.js
// person working hard a am I
