// Hash Map - Key Value pair
// Key can be any type: string, number, object, array, function etc

const phoneBook = new Map();

phoneBook.set("allice", "433-2342");
phoneBook.set("bob", "532-34543");

console.log(phoneBook.get("allice"));

console.log(phoneBook.get("bob"));


phoneBook.set("nira", "431-232-2323");
console.log(phoneBook.get("nira"));

for (const [name, phone] of phoneBook){
    console.log (name, phone);
}