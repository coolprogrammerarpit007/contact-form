`use strict`;


let selectedValue;
const inputEls = document.querySelectorAll(`.input-element`);

// Now Adding focus event listener to the input elements

inputEls.forEach((el)=>{
  el.addEventListener(`focus`,(e)=>{
    el.classList.add(`sucess`)
  })
})


// Event to on mouse leave

inputEls.forEach((el) =>{
  el.addEventListener(`mouseleave`,(e)=>{
    if(el.classList.contains(`sucess`)){
      el.classList.remove(`sucess`);
    }
  })
})


// **************************************************
// **************************************************

// Adding Event Listener to the radio buttons

const optionValues = document.querySelectorAll(`input[name = "query"]`);


// Adding event listener to the radio btns

optionValues.forEach((option)=>{
  option.addEventListener(`change`,(e)=>{
    if(option.checked){
      selectedValue = option.value;
      alert(selectedValue);
    }
  })
})



// ************************************************
// ************************************************

// Getting Acess to the form element

const form = document.getElementById(`form`);


// Adding Submit Event to the form event


form.addEventListener(`submit`,(e)=>{


  e.preventDefault(); // Preventing Page to get refreshed.

  const firstName = document.getElementById(`f-name`).value;
  const lastName = document.getElementById(`l-name`).value;
  const email = document.getElementById(`email`).value;
  const message = document.getElementById(`msg`).value;
  const checkBox = document.getElementById(`consent`);
  
  //  To check if input values are right

  if(!firstName.toLowerCase().trim()){
    alert(`Invalid Input!`)
    document.getElementById(`f-name`).classList.add(`error`);
    return;
  }
  if(!lastName.toLowerCase().trim()){
    alert(`Invalid Input!`)
    document.getElementById(`f-name`).classList.add(`error`);
    return;
  }

  if(!message.toLowerCase().trim()){
    alert(`Invalid Input!`);
    return;
  }

  // checking if email is valid

  if(!email.toLowerCase().trim() || !isValidEmail(email) ){
    alert(`Invalid Email Address!`);
    return;
  }


  // checking if the checkbox got checked or not!
  if(!checkBox.checked){
    alert(`You have to agree to consent!`);
    return;
  }


  // checking if radio btns are selected or not!
  if(!selectedValue){
    alert(`Select a proper option!`);
    return;
  }

  alert(`Your form has been submitted!`);
  form.reset();
})




// function to check if email is valid or not

function isValidEmail(email){
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}