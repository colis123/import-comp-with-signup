document.querySelector('#firstName').addEventListener('focusout', validateName);
document.querySelector('#lastName').addEventListener('focusout', validateLastname);
document.querySelector('#email').addEventListener('focusout', validateEmail);
document.querySelector('#password').addEventListener('focusout', validatePassword);


function validateName () {
  const name = document.querySelector('#firstName');
  const re = /^[a-zA-Z]{2,10}$/;

  if(!re.test(name.value)) {
    document.querySelector('.invalid').style.display = 'block';
  } else {
    document.querySelector('.invalid').style.display = 'none';
  }
}

function validateLastname() {
  const name = document.querySelector('#lastName');
  const re = /^[a-zA-Z]{2,10}$/;

  if(!re.test(name.value)) {
    document.querySelector('.invalidL').style.display = 'block';
  } else {
    document.querySelector('.invalidL').style.display = 'none';
  }
}


function validateEmail() {
  const email = document.querySelector('#email');
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if(!re.test(email.value)) {
    document.querySelector('.invalidE').style.display = 'block';
  } else {
    document.querySelector('.invalidE').style.display = 'none';
  }
}

function validatePassword() {
  const password = document.querySelector('#password');
  const re = /([^\s])/;

  if(!re.test(password.value)) {
    document.querySelector('.invalidP').style.display = 'block';
  } else {
    document.querySelector('.invalidP').style.display = 'none';
  }
}