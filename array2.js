// Create an array of songs name and do the following operations:
// 1. Print the entire array with its type and length
// 2. Add two new songs at begining
// 3. remove last song

songs = [
  "Shape of You",
  "Blinding Lights",
  "Rolling Deep",
  "Perfect",
  "Uptown Funk",
];

//  ---------- 1. -----------

console.log("The entire array : ", songs);
console.log("Type of an array : ", typeof(songs));
console.log("Length of an array : ", songs.length);


//  ---------- 2. -----------

songs.unshift("Bohemian Rhapsody", "Blind Light");
console.log(songs);


//  ---------- 3. -----------

songs.pop([4]);
console.log(songs);
