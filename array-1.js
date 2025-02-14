//  Create an array of your favorite dishes with at least 5 dishes in it and do the following operations:
//  1. Traverse the entire array using for in, for of and for loop
//  2. print dish at 4 position
//  3. delete dish at start
//  4. insert two new dishes in the end

arr = ["pho", "Pizza", "naan", "chicken", "Roti"];


// ------------- 1. -------------

console.log("Traverse an array using for in : ");
for(x in arr){
    console.log(arr[x]);
}

console.log("Traverse an array using for of : ");
for(y of arr){
    console.log(y);
}

console.log("Traverse an array using for loop : ");
for(i=0;i<arr.length;i++){
    console.log(arr[i]);
}


//  ------------- 2. -------------

console.log("Dish at 4 position : ", arr[3]);


//  ------------- 3. -------------

arr.shift(arr[0]);
console.log("Delete dish at start :", arr);


//  ------------- 4. -------------

arr.push("Gheer", "Garlic bread");
console.log("insert two new dishes in the end : ", arr);
