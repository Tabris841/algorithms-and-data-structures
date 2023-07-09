// function areThereDuplicates(...args) {
//   let collection = {};

//   for (let val in arguments) {
//     collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
//   }

//   for (let key in collection) {
//     if (collection[key] > 1) return true;
//   }

//   return false;
// }

// function areThereDuplicates(...args) {
//   args.sort((a, b) => a > b);

//   let start = 0;
//   let next = 1;

//   while (next < args.length) {
//     if (args[start] === args[next]) {
//       return true;
//     }
//     start++;
//     next++;
//   }

//   return false;
// }

function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates('a', 'b', 'c', 'a'));
