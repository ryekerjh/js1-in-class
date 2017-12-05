var forms = document.forms;

forms.login.email.addEventListener('keydown', function(e) {
  console.log(e.target.value);
});

const loginForm = forms.login;

function enableSubmit() {
  if(loginForm.password.value.length > 0 && loginForm.username.value.length > 0 && loginForm.email.value.length > 0) {
    //HERE IS WHERE THE LOGIC GOES...
    loginForm.submit.removeAttribute('disabled');
  }
};

for(let i = 0; i < loginForm.length; i++) {
  loginForm[i].addEventListener('keyup', function(e) {
    enableSubmit();
  });
}

var practice = function() {
  var name = 'Ryeker';
  console.log(this);
};
var me = 'name';
// practice();
// console.log(this.me);

var clickDiv = document.querySelector('#click');
clickDiv.addEventListener('click', function(e) {
  console.log(this);
});





var empty = {
  
};

var checkScope = function() {
  console.log(this.user);
};

var obj = {
  test: checkScope,
  user: 'ryeker'
};

// obj.test();

let name = "Ryeker";

// let name = "Ryan";

// console.log(name); //ASSUMPTION: hoisted declaration

// var myString = new String("hello world!!");
// console.log(Object.getPrototypeOf(myString));

 function Movie(title, releaseYear, IMDBRating, director) {
   this.title = title;
   this.releaseYear = releaseYear;
   this.IMDBRating = IMDBRating;
   this.director = director;
 };
 
 Movie.prototype.sayThings = function() { //Add a method to a prototype
   return `The movie ${this.title} was released in ${this.releaseYear} and was directed by ${this.director}`
 };
 
 var brick = new Movie("Brick", 2004, 10, "Ryan Johnson");
 
 
 
 
 
 
 function Arthouse(title, releaseYear, IMDBRating, director, snoodyLevel, redditRating) {
   Movie.call(this, title, releaseYear, IMDBRating, director);
   this.snoodyLevel = snoodyLevel;
   this.redditRating = redditRating;
 };
 
 var snoodyMovie = new Arthouse("The Room", 2002, 0, "Tommy Wiesoau", "10/10", 0);
 
 // console.log(snoodyMovie);
 
 
 
 
 
 
 
 
 
 
 
 
 

 // brick.sayThings();
 
 // function User(name, pw) {
 //   this.name = name;
 //   this.password = pw;
 // };
 // 
 // var newUser = new User("Ryeker", "19191919");
 // 
 // console.log(newUser);
 
 // function Arthouse(snoodyLevel, redditRating) {
 //   this.snoodyLevel = snoodyLevel;
 //   this.redditRating = redditRating;
 // };
 
 
 
 
 












//
