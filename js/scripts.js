/*Create a file named app.js
Write a program that:
Asks for the user's first name
Asks for the user's last name
Logs the user's first name to the console
Alerts the user's last name
*Confirms the user's birthday and alerts the resulting birthday
Include the app.js in an empty html page
Add it to a repository's gh-pages branch so I can test it
*/

let firstName = prompt('What\'s your first name?');
console.log(firstName);
let lastName = prompt("What's your last name?");
alert(lastName);
let birthday = prompt('What is your birthday?', '12/12/2000');
let isBirthdayCorrect = confirm(`Is ${birthday} your birthday?`);
//Assuming user said "yes"
alert(birthday);
