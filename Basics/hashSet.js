// a set and added values

const seen = new Set();

seen.add(10);
seen.add(20);
seen.add(10);       // duplicate gets silently ignored

console.log(seen.has(10));      // true
console.log(seen.has(20));      // true

console.log(seen.size);         // 2

console.log([...seen]); 
seen.delete(20)
console.log([...seen]);         // spread to make an array - outputs [10, 20]


