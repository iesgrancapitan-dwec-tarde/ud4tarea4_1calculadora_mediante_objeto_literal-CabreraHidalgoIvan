createHTML();

function createHTML() {
  const divContainer = document.createElement('div');
  divContainer.classList.add('container');
  document.body.appendChild(divContainer);

  const divCalculator = document.createElement('div');
  divCalculator.classList.add('calculator');
  divContainer.appendChild(divCalculator);

  const divDisplay = document.createElement('div');
  divDisplay.classList.add('display');
  divCalculator.appendChild(divDisplay);

  const divDisplayPrevious = document.createElement('div');
  divDisplayPrevious.classList.add('displayPrevious');
  divDisplay.appendChild(divDisplayPrevious);

  const divDisplayCurrent = document.createElement('div');
  divDisplayCurrent.classList.add('displayCurrent');
  divDisplay.appendChild(divDisplayCurrent);

  const btnClear = document.createElement('button');
  btnClear.classList.add('operator');
  btnClear.classList.add('clear');
  btnClear.innerText = 'C';
  divCalculator.appendChild(btnClear);

  const btnDelete = document.createElement('button');
  btnDelete.classList.add('operator');
  btnDelete.classList.add('delete');
  btnDelete.innerText = '↼';
  divCalculator.appendChild(btnDelete);

  const btnModule = document.createElement('button');
  btnModule.classList.add('operator');
  btnModule.innerText = '%';
  divCalculator.appendChild(btnModule);

  const btnDivide = document.createElement('button');
  btnDivide.classList.add('operator');
  btnDivide.innerText = '÷';
  divCalculator.appendChild(btnDivide);

  const seven = document.createElement('button');
  seven.classList.add('number');
  seven.innerText = '7';
  divCalculator.appendChild(seven);

  const eight = document.createElement('button');
  eight.classList.add('number');
  eight.innerText = '8';
  divCalculator.appendChild(eight);

  const nine = document.createElement('button');
  nine.classList.add('number');
  nine.innerText = '9';
  divCalculator.appendChild(nine);

  const btnMultiply = document.createElement('button');
  btnMultiply.classList.add('operator');
  btnMultiply.innerText = '*';
  divCalculator.appendChild(btnMultiply);

  const four = document.createElement('button');
  four.classList.add('number');
  four.innerText = '4';
  divCalculator.appendChild(four);

  const five = document.createElement('button');
  five.classList.add('number');
  five.innerText = '5';
  divCalculator.appendChild(five);

  const six = document.createElement('button');
  six.classList.add('number');
  six.innerText = '6';
  divCalculator.appendChild(six);

  const btnSubstract = document.createElement('button');
  btnSubstract.classList.add('operator');
  btnSubstract.innerText = '-';
  divCalculator.appendChild(btnSubstract);

  const one = document.createElement('button');
  one.classList.add('number');
  one.innerText = '1';
  divCalculator.appendChild(one);

  const two = document.createElement('button');
  two.classList.add('number');
  two.innerText = '2';
  divCalculator.appendChild(two);

  const three = document.createElement('button');
  three.classList.add('number');
  three.innerText = '3';
  divCalculator.appendChild(three);

  const btnAdd = document.createElement('button');
  btnAdd.classList.add('operator');
  btnAdd.innerText = '+';
  divCalculator.appendChild(btnAdd);

  const zero = document.createElement('button');
  zero.classList.add('number');
  zero.innerText = '0';
  divCalculator.appendChild(zero);

  const plus_minus = document.createElement('button');
  plus_minus.classList.add('operator');
  plus_minus.innerText = '±';
  divCalculator.appendChild(plus_minus);

  const btnComma = document.createElement('button');
  btnComma.classList.add('number');
  btnComma.classList.add('comma');
  btnComma.innerText = ',';
  divCalculator.appendChild(btnComma);

  const btnEqual = document.createElement('button');
  btnEqual.classList.add('operator');
  btnEqual.innerText = '=';
  divCalculator.appendChild(btnEqual);

  const displayPreviousValue = document.querySelector('.displayPrevious');
  const displayCurrentValue = document.querySelector('.displayCurrent');
  const buttons = document.querySelectorAll('.number');
  const operators = document.querySelectorAll('.operator');

  const display = new Objeto(displayPreviousValue, displayCurrentValue);

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      display.addNumbers(button.innerText);
    });
  });

  const deleteNums = document.querySelector('.delete');
  deleteNums.addEventListener('click', () => {
    display.delete();
  });

  const deleteAll = document.querySelector('.clear');
  deleteAll.addEventListener('click', () => {
    display.deleteAll();
  });

  const comma = document.querySelector('.comma');
  comma.addEventListener('click', () => {
    display.decimals();
  });

  btnSubstract.addEventListener('click', () => {
    display.negative();
  });

  window.addEventListener('keypress', (e) => {
    display.useKeyboard(e);

  });
}

