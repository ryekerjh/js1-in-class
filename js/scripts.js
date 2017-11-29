//PRINT OUT ALL NUMBERS FROM 1-100
//FOR ALL MULTIPLES OF 3, PRINT "FIZZ" INSTEAD OF THE NUMBER
const body = document.querySelector('body');
for(i = 1; i <= 100; i++) {
  let text;
  if(i % 3 === 0 && i % 5 === 0) {
    text = 'FizzBuzz';
  } else if(i % 3 === 0) {
    text = 'Fizz';
  } else if(i % 5 === 0){
    text = 'Buzz';
  } else {
    text = i;
  }
  let elem = document.createElement('p');
  elem.textContent = text;
  body.appendChild(elem);
}
