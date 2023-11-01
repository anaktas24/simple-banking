'use strict'

//Data

const account1 = {
  owner: 'John Anthony',
  movements: [200,400,-1000,550,-200,-100,10],
  interestRate: 1.5,
  pin:1024,
};

const account2 = {
  owner: 'Jessy Moore',
  movements: [100,-550,60000,510,-900,-7700,20],
  interestRate: 1.2,
  pin:1025,
};
const account3 = {
  owner: 'Mickey Mouse',
  movements: [330,-660,8000,-50,200,-900,44],
  interestRate: 0.6,
  pin:1026,
};
const account4 = {
  owner: 'Kiyo Yamamoto',
  movements: [102,550,-1800,850,-9900,-400,-40],
  interestRate: 1,
  pin:1027,
};
const accounts = [account1,account2,account3,account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


const displayMovements = function(movements){

  containerMovements.innerHTML = '';

  movements.forEach(function(mov,i) {

    const type = mov > 0 ? 'deposit' : 'withdrawal'

    const html= `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
      <div class="movements__value">${mov}</div>
    </div>`;

    containerMovements.insertAdjecentHTML('afterbegin',html);
  });

};
displayMovements(account1.movements);
