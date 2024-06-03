`use strict`;


let selectedValue;
const inputEls = document.querySelectorAll(`.input-element`);
const sucessFormUpload = document.querySelector(`.sucessful-form-upload`);

// Now Adding focus event listener to the input elements

inputEls.forEach((el)=>{
  el.addEventListener(`click`,(e)=>{
    if(el.classList.contains(`validate-error`)){
      el.classList.remove(`validate-error`);
    }
    el.classList.add(`sucess`);
  })
})


// Event to on mouse leave




// **************************************************
// **************************************************

// Adding Event Listener to the radio buttons

const optionValues = document.querySelectorAll(`input[name = "query"]`);


// Adding event listener to the radio btns

optionValues.forEach((option)=>{
  option.addEventListener(`change`,(e)=>{
    if(option.checked){
      selectedValue = option.value;
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
    console.log(`firstname`);
    alert(`Invalid Input!`)
    document.getElementById(`f-name`).classList.remove(`sucess`);
    document.getElementById(`f-name`).classList.add(`validate-error`);
    document.getElementById(`err-msg-1`).classList.remove(`hidden`);

    setTimeout(()=>{
      document.getElementById(`err-msg-1`).classList.add(`hidden`);
    },"2000")
    return;
  }
  if(!lastName.toLowerCase().trim()){
    alert(`Invalid Input!`)
    document.getElementById(`l-name`).classList.remove(`sucess`);
    document.getElementById(`l-name`).classList.add(`validate-error`);
    document.getElementById(`err-msg-2`).classList.remove(`hidden`);

    setTimeout(()=>{
      document.getElementById(`err-msg-2`).classList.add(`hidden`);
    },"2000")
    return;
  }

  if(!message.toLowerCase().trim()){
    alert(`Invalid Input!`);
    document.getElementById(`msg`).classList.remove(`sucess`);
    document.getElementById(`msg`).classList.add(`validate-error`);
    return;
  }

  // checking if email is valid

  if(!email.toLowerCase().trim() || !isValidEmail(email) ){
    alert(`Invalid Email Address!`);
    document.getElementById(`email`).classList.remove(`sucess`);
    document.getElementById(`email`).classList.add(`validate-error`);
    document.getElementById(`err-msg-3`).classList.remove(`hidden`);

    setTimeout(()=>{
      document.getElementById(`err-msg-3`).classList.add(`hidden`);
    },"2000")
    return;
  }

  // checking if radio btns are selected or not!
  if(!selectedValue){
    alert(`Select a proper option!`);
    return;
  }

  // checking if the checkbox got checked or not!
  if(!checkBox.checked){
    alert(`You have to agree to consent!`);
    return;
  }


  

  sucessFormUpload.classList.remove(`hidden`);
  setTimeout(()=>{
    sucessFormUpload.classList.add(`hidden`);
  },"3000")
  inputEls.forEach((el)=>{
    if(el.classList.contains(`sucess`)){
      el.classList.remove(`sucess`);
    }
  })
  
  
  selectedValue = '';
  form.reset();
})




// function to check if email is valid or not

function isValidEmail(email){
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}