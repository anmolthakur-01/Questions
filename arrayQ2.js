// Create an object with name myself, with keys name, age, hobby, occupation
// 1. Print your name and age
// 2. Replace your occupation with web developer
// 3. Add a new key name address
// 4. Delete age

myself = {
  name: "Anmol",
  age: 20,
  hobby: "Gardening",
  occupation: "MERN",
};
//  ---------- 1. ----------
console.log("--- 1 ---");
console.log("Name :", myself.name, ",  Age :", myself.age);

//  ---------- 2. ----------
console.log("--- 2 ---");
console.log("Occupation before :", myself.occupation);
myself.occupation = "Web Developer";
console.log("Occupation after :", myself.occupation);

//  ---------- 3. ----------
console.log("--- 3 ---");
myself.address = "Mohali";
console.log(myself);

//  ---------- 4. ----------
console.log("--- 4 ---");
delete myself.age;
console.log(myself);
