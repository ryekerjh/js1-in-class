const btns = document.getElementsByClassName('numbs');
const operators = document.getElementsByClassName('ops');
var result = document.getElementById('result'),
total = 0,
valueShown = 0;
selectedValue = "0",
firstValue = "",
secondValue = "",
allowSecond = false,
operatorType = null;
result.innerText = total;

for(let i = 0; i < btns.length; i++) {
  let thisBtn = btns[i];
  i != 9 ? thisBtn.innerText = i + 1 : thisBtn.innerText = 0;
  thisBtn.value = thisBtn.innerText;
  thisBtn.addEventListener("click", (e) => {
    if(!allowSecond) {
      firstValue == "0" ? firstValue = e.target.innerText.toString() : firstValue += e.target.innerText.toString();
      valueShown = firstValue;
      total = firstValue;
      result.innerText = valueShown;
    } else {
      secondValue += e.target.innerText.toString();
      valueShown = secondValue;
      result.innerText = valueShown;
    }
  }); 
}

for(let j = 0; j < operators.length; j++) {
  let thisBtn = operators[j];
  thisBtn.addEventListener('click', (e) => {
    firstValue = parseInt(firstValue);
    secondValue = parseInt(secondValue);
  if(operatorType == null) {
    operatorType = `${e.target.innerText}`;
    allowSecond = true;
    console.log(operatorType);
  } else if(operatorType == '=') {
      console.log('first', firstValue, 'second', secondValue);
        switch(operatorType) {
          case '+':
          total = firstValue + secondValue;
          console.log(total);
          break;
          case '-':
          total = firstValue - secondValue;
          break;
          case '*':
          total = firstValue * secondValue;
          break;
          case '/':
          total = firstValue / secondValue;
          break;
          default:
          total = total;
          break;
        }
      }
    result.innerText = total;
  })
}
