const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  let developers = [];
  data.forEach(element => {
    if (element.profession === "developer") {
      developers.push(element);
    }
  });
  console.log(developers);
}

// 2. Add Data
function addData() {
  const name = prompt("Enter name:");
  const age = parseInt(prompt("Enter age:"));
  const profession = prompt("Enter profession:");
  data.push({ name, age, profession });
}

// 3. Remove Admins
function removeAdmin() {
  data = data.filter(element => element.profession !== "admin");
}

// 4. Concatenate Array
function concatenateArray() {
  const dummyArray = [
    { name: "alice", age: 30, profession: "manager" },
    { name: "bob", age: 28, profession: "designer" },
  ];
  const concatenatedArray = data.concat(dummyArray);
  console.log(concatenatedArray);
}

// 5. Average Age
function averageAge() {
  const totalAge = data.reduce((sum, element) => sum + element.age, 0);
  const avgAge = totalAge / data.length;
  console.log("Average Age:", avgAge);
}

// 6. Age Check
function checkAgeAbove25() {
  const isAbove25 = data.some(element => element.age > 25);
  console.log("Is there anyone above 25?", isAbove25);
}

// 7. Unique Professions
function uniqueProfessions() {
  const professions = [...new Set(data.map(element => element.profession))];
  console.log("Unique Professions:", professions);
}

// 8. Sort by Age
function sortByAge() {
  data.sort((a, b) => a.age - b.age);
  console.log("Sorted by Age:", data);
}

// 9. Update Profession
function updateJohnsProfession() {
  const johnIndex = data.findIndex(element => element.name === "john");
  if (johnIndex !== -1) {
    data[johnIndex].profession = "manager";
  }
}

// 10. Profession Count
function getTotalProfessions() {
  const developerCount = data.filter(element => element.profession === "developer").length;
  const adminCount = data.filter(element => element.profession === "admin").length;
  console.log("Total Developers:", developerCount);
  console.log("Total Admins:", adminCount);
}
