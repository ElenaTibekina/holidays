//Task 1. Find The Parity Outlier
function findOutlier(integers) {
  let even = integers.filter(item => !(item % 2));
  let odd = integers.filter(item => item % 2);
  return odd.length < even.length ? odd.pop() : even.pop();
}

// Task 2. Exes And Oh's
function XO(str) {
  return !str
    .toLowerCase()
    .split("")
    .map(item => ({ x: 1, o: -1 }[item] || 0))
    .reduce((diff, item) => diff + item, 0);
}

// Task 3. Shortest Word
function findShort(s) {
  return s.split(" ").sort((a, b) => a.length - b.length)[0].length;
}

// Task 4. Vowel Count
function getCount(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  return str
    .split("")
    .reduce((acc, char) => (vowels.indexOf(char) >= 0 ? acc + 1 : acc), 0);
}

//Task 5. List Filtering
function filter_list(l) {
  return l.filter(item => typeof item === "number");
}

// Task 6. Isograms
function isIsogram(str) {
  return new Set(str.toLowerCase()).size === str.length;
}

// Task 7. Jaden Casing Strings
String.prototype.toJadenCase = function() {
  return this.split(" ")
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};
