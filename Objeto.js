class Objeto {

  constructor(displayPrevious, displayCurrent) {
    this.displauPrevious = displayPrevious;
    this.displayCurrent = displayCurrent;
    this.calculadora = new Calculator();
    this.operationType = undefined;
    this.currentValue = '';
    this.previousValue = '';
  }

  addNumbers(number) {
    if (number === ',' && this.currentValue.includes(',')) return;

    if(this.currentValue === '0' || this.currentValue === '') {
      this.currentValue = '';
      this.currentValue += number;
      this.printValues();
    } else if (this.currentValue === '0' && number === ',') {
      this.currentValue = '0,';
      this.printValues();
    } else if (this.currentValue === ',') {
      this.currentValue = '0,' + number;
      this.printValues();

    } else if (this.currentValue === '0' && number !== ',') {
      this.currentValue = number;
      this.printValues();
    } else {
      if (this.currentValue.length === 3 || this.currentValue.length === 7 || this.currentValue.length === 11) {
        this.currentValue += '.';
        this.printValues();
      }
      this.currentValue = this.currentValue.toString() + number.toString();
      this.printValues();
    }
  }

  delete() {
    if(this.displayCurrent.textContent.length > 1) {
      this.displayCurrent.textContent = this.displayCurrent.textContent.slice(0, -1);
    } else {
      this.deleteAll();
    }
  }

  deleteAll() {
    this.currentValue = '0';
    this.previousValue = '';
    this.operationType = undefined;
    this.printValues();
  }

  decimals() {
    if (this.displayCurrent.textContent.length === 1) {
      this.displayCurrent.textContent = '0,';
    }
  }

  negative() {
    if (this.currentValue !== '0') {
      this.currentValue = this.currentValue * -1;
      this.printValues();
    }
  }

  printValues() {
    this.displayCurrent.textContent = this.currentValue;
    this.displauPrevious.textContent = this.previousValue;
  }

  useKeyboard(e) {
    if (e.key === 'Backspace') {
      this.delete();
    } else if (e.key === ',') {
      this.decimals();
    } else if (e.key === '1') {
      this.addNumbers('1');
    } else if (e.key === '2') {
      this.addNumbers('2');
    } else if (e.key === '3') {
      this.addNumbers('3');
    } else if (e.key === '4') {
      this.addNumbers('4');
    } else if (e.key === '5') {
      this.addNumbers('5');
    } else if (e.key === '6') {
      this.addNumbers('6');
    } else if (e.key === '7') {
      this.addNumbers('7');
    } else if (e.key === '8') {
      this.addNumbers('8');
    } else if (e.key === '9') {
      this.addNumbers('9');
    } else if (e.key === '0') {
      this.addNumbers('0');
    } else if (e.key === '-') {
      display.negative();
    }
  }
}
