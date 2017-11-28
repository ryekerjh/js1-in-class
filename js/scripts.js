var div = document.querySelector('.text');
// div.textContent = '<p>hello world!</p>';
// div.innerHTML = '<h1 class="text-center">Whoa, JS IS SO KEWL!!</h1>';
var myNewPTag = document.createElement('p');
// var myDiv = document.createElement('div');
// myDiv.textContent = 'Star Wars is gonna suck...:()';
myNewPTag.textContent = 'stuff';
var myLi = document.getElementsByClassName('myLi');
// div.appendChild(myNewPTag);
// console.log(myNewPTag);
// div.append(myDiv, myNewPTag);
var ul = document.querySelector('ul');
var lis = document.querySelectorAll('li');
ul.insertBefore(myNewPTag, lis[2]);

myNewPTag.className = 'text-center text-danger';

myNewPTag.addEventListener('click', function(e) {
  
});
var myImg = document.createElement('img');
myImg.setAttribute('src', 'https://cdn.trolleytours.com/wp-content/uploads/2016/06/washington-dc-capitol-at-night.jpg');

div.appendChild(myImg);

// var userInput = 'DjE  EJ J nnd  jd      002';
// userInput = userInput.split(' ').trim().join(' ');
