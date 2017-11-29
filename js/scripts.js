const btns = document.getElementsByClassName('numbs');
const operators = document.getElementsByClassName('ops');
var result = document.getElementById('result'),
firstValue = 0,
secondValue = 0,
allowSecond = false,
secondEntered = false,
operatorType = null,
memory = null;
result.innerText = 0;

for(let i = 0; i < btns.length; i++) {
  let thisBtn = btns[i];
  i != 9 ? thisBtn.innerText = i + 1 : thisBtn.innerText = 0;
  thisBtn.value = thisBtn.innerText;
  thisBtn.addEventListener("click", (e) => {
    if(!allowSecond) {
      setFirst(parseInt(`${e.target.value}`));
    } else {
      setSecond(parseInt(`${e.target.value}`));
    }
  }); 
}

for(let j = 0; j < operators.length; j++) {
  let thisBtn = operators[j];
  thisBtn.addEventListener('click', function(e) {
    allowSecond = true;
    if(secondValue !== 0) {
      performOperation(`${e.target.innerText}`)
    } else {
      operatorType = `${e.target.innerText}`;
    }
  });
}

function setFirst(value) {
  if(firstValue != 0) {
    firstValue += value.toString();
  } else {
    firstValue = value.toString();
  }
  result.innerText = firstValue;
};

function setSecond(value) {
  if(secondValue != 0) {
    secondValue += value.toString();
  } else {
    secondValue = value.toString();
  }
  secondEntered = true;
  result.innerText = secondValue;
};

function performOperation(operator) {
  firstValue = parseInt(firstValue);
  secondValue = parseInt(secondValue);
  switch(operator) {
    case '+':
      firstValue += secondValue;
      operatorType = '+';
      secondValue = 0;
      break;
    case '-':
      firstValue -= secondValue;
      operatorType = '-';
      secondValue = 0;
      break;
    case '*':
      multiply();
      break;
    case '/':
      divide();
      break;
    case 'C':
      clearValues();
      break;
    default:
      evaluateEquals();
      break;
  }
  result.innerText = firstValue;
};

function evaluateEquals() {
  console.log(operatorType, 'optype', firstValue, '<<<first', secondValue, '<<<second');
  switch(operatorType) {
    case '+':
      firstValue += secondValue;
      break;
    case '-':
      firstValue -= secondValue;
      break;
    case '*':
      multiply();
      break;
    case '/':
      divide();
      break;
    default:
      firstValue = firstValue;
      break;
  }
  result.innerText = firstValue;
  // secondValue = 0;
  secondEntered = false;
}

function multiply() {
  if(secondEntered) {
    firstValue *= secondValue;
    secondValue = 0;
  } else {
    firstValue = firstValue;
  }
  operatorType = '*';
};

function divide() {
  if(secondEntered) {
    firstValue /= secondValue;
    secondValue = 0;
  } else {
    firstValue = firstValue;
  }
  operatorType = '/';
};

function clearValues() {
  firstValue = "0";
  secondValue = "0";
  operatorType = null;
  allowSecond = false;
};
