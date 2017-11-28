//Get the body tag and create the various tags
const body = document.querySelector('body');
const nav = document.createElement('ul');
const h1 = document.createElement('h1');
const p = document.createElement('p');
const footer = document.createElement('footer');
const tagContents = ['Home', 'About', 'Contact'];
//Add BS classes to nav for styling
nav.classList.add('nav', 'nav-pills');

for(let i = 0; i < 4; i++) {
  let li = document.createElement('li');
  li.classList.add('text-default');
  if(i != 0) {
    li.classList.add('pull-right');
  }
  li.textContent = tagContents[i];
  nav.appendChild(li);
}

h1.textContent = 'Hello World!';
h1.classList.add('text-center');

body.append(nav, h1);
