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

var todos = [];
for(let i = 0; i <= 3; i++) {
  let todo = [];
  var userTodo = prompt('What is something you want to get done?', 'Netflix');
  var dueDate = prompt('How long should this take you?', '1');
  dueDate = parseInt(dueDate);
  if(dueDate == NaN) {
    alert('OH noooooooo....');
  } else {
  todo.push(userTodo, dueDate);
  todos.push(todo);  
}
  if(todos.length == 3) {
    break;
  } else {
    continue;
  }
}
let v = 0;
while(v <= 2) {
  if(todos[v][1] < todos[v - 1][1]) {
    
  }
v++
}
//[["thing1", 1], ["thing2", 1]];
















//
