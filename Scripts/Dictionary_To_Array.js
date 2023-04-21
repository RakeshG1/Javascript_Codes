var nameArray = [];
var costArray = [];

let obj = [{ name: "Apple", position: 10},
           { name: "Banana", position: 4}
          ]

for (var i=0; i < obj.length; i++){

    name_temp = obj[i]["name"];
    cost_temp = obj[i]["position"];
    nameArray.push(name_temp);
    costArray.push(cost_temp);

}

console.log("Fruits Array");
console.log(nameArray);
console.log("Cost Array");
console.log(costArray);


// [Running] node "/Users/rock/Git_Repo/Javascript_Codes/Scripts/Dictionary_To_Array.js"
// Fruits Array
// [ 'Apple', 'Banana' ]
// Cost Array
// [ 10, 4 ]