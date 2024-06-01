`use strict`;

// ********************************
// Form Valiation
// getting acess to the dom elements

// state variable
let isOption = false;
let inputValue = false;

const firstName = document.getElementById(`f-name`);

const lastName = document.getElementById(`l-name`);

const email = document.getElementById(`email`);

// selecting radio buttons

const queryOptions = document.querySelectorAll(`input[name = "query"]`);

// selecting the text msg

const message = document.getElementById(`msg`);

// ************************************
const checkBox = document.getElementById(`consent`);

// *************************************

const submiBtn = document.getElementById(`btn`);

// *******************************************

// selecting all the input elements

const inputEl = document.querySelectorAll(`.input-element`);

// function for applying on focus

const validation = function (el, i) {
  el.classList.remove(`error`);
  document.getElementById(`err-msg-${i + 1}`).classList.add(`hidden`);
  el.classList.add(`sucess`);
};

// function to check error

const error = function (el, i) {
  el.classList.remove(`sucess`);
  el.classList.add(`error`);
  document.getElementById(`err-msg-${i + 1}`).classList.remove(`hidden`);
};

// *********************************
// Applying event listener on hover

inputEl.forEach((input, i) => {
  // applying the event listener
  input.addEventListener(`mouseover`, function (e) {
    validation(input, i);
  });
});

// Applying event listener on mouse leave

inputEl.forEach((input, i) => {
  // applying the event listener
  input.addEventListener(`mouseleave`, function (e) {
    const valueInput = input.value;
    if (valueInput !== ``) {
      validation(input, i);
      inputValue = true;
    } else {
      error(input, i);
      inputValue = false;
    }
  });
});

// **************************************

// Adding event listener to the radio btns

queryOptions.forEach((query, i) => {
  query.addEventListener(`change`, function (e) {
    isOption = true;
  });
});

// *********************************
// *********************************

// Form submittion event

submiBtn.addEventListener(`click`, function (e) {
  e.preventDefault();

  if (isOption && inputValue) {
    confirm(`Your form has submitted sucessfully!`);
  } else {
    alert(`Fill the necessary details!`);
  }
});
