document.querySelector('#firstName').addEventListener('blur', validateName);

const invalid =  document.querySelector('.invalid');

function validateName () {
  const name = document.querySelector('#firstName');
  const re = /^[a-zA-Z]{2,10}$/;


  if(!re.test(name.value)) {
    
  } else {
    console.log('pass');
  }
}