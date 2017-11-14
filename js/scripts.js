var myArray = ['Stranger Things', "Logan", 13, 'Stranger Things', true, 2004];
// console.log(myArray, myArray.length);
var ryan = "awesome-sauce";
// alert(myArray[0]);
// console.log(Array.isArray(myArray));
let importantIndex = myArray.indexOf("Power Rangers", 1);
// console.log(importantIndex);
// console.log(myArray.slice(2));
// console.log(myArray);

var holder = [];
var forceAwakens = ['Star Wars: The Force Awakens', 'Kylo Renn', [2]];
var stay = ['Stay', 'Ryan', [4]];
var empire = ['Star Wars: The Empire Strikes Back', 'Han Solo',[1]];
var equilibrium = ['Equilibrium', 'Christian', [3]];
holder.splice(0, 0, forceAwakens, stay, empire, equilibrium);
console.log(holder);
var titles = [];

titles.push(holder[0][0], holder[1][0], holder[2][0], holder[3][0]);
// alert(titles);

var favAndLeastFav = [];
// alert(favAndLeastFav.push(holder[2], holder[3]));

var arr = ['js1', 'Websites for beginners', 'Mobile friendly websites', 'angular 2'];
// let n = 0;

// while(n < arr.length) {
//   console.log(arr[n]);
//   n++;
// }


for(let i = 0; i <= holder.length; i++) {
  console.log(holder[i]);
  
}


















//
