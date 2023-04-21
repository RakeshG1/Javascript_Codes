
let sampleArray = [100, 200, 300];

console.log("Sample Array");
console.log(sampleArray);    

let sum = sampleArray.reduce((a,b) => a+b);

let percents = sampleArray.map(n => n/sum * 100.0,2);

console.log("Percents");
console.log(percents);

percents_rounded = percents.map(function(each_element){
    return Number(each_element.toFixed(2));
})
console.log("Percents Rounded");
console.log(percents_rounded);

// Executed using Run button(CodeRunner plugin in visual code, which requires nodejs at backend)
// ---------------------------------------------------------------------------------------------
// [Running] node "/Users/rock/Git_Repo/Javascript_Codes/Scripts/Array_Percentage_Calculation.js"
// Sample Array
// [ 100, 200, 300 ]
// Percents
// [ 16.666666666666664, 33.33333333333333, 50 ]
// Percents Rounded
// [ 16.67, 33.33, 50 ]

// Executed using CLI
// ------------------
// (base) rocks-Air:Scripts rock$ node -v
// v19.9.0

// (base) rocks-Air:Scripts rock$ node Array_Percentage_Calculation.js
// Sample Array
// [ 100, 200, 300 ]
// Percents
// [ 16.666666666666664, 33.33333333333333, 50 ]
// Percents Rounded
// [ 16.67, 33.33, 50 ]