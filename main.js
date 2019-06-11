document.querySelector('#firstName').addEventListener('blur', validateName);

const invalid =  document.querySelector('.invalid');

function validateName () {
  const name = document.querySelector('#firstName');
  const re = /^[a-zA-Z]{2,10}$/;


  if(!re.test(name.value)) {
    document.querySelector('.invalid').style.display = 'block';
  } else {
    document.querySelector('.invalid').style.display = 'none';
  }
}