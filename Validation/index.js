const allForm = document.querySelector('.form');
const allInput = document.querySelectorAll('.form__input');
const submit = document.querySelector('#submit-btn');

const clearForm = function() { allForm.innerHTML = ''; };

function submitFormAnswer() {
  return {
    name: document.querySelector('.input-name').value,
    email: document.querySelector('.input-email').value,
    phone: document.querySelector('.input-phone').value,
    job: document.querySelector('.select-job').value,
    password: document.querySelector('.input-password').value,
    website: document.querySelector('#website-true').value,
  }
};

function showMessage() {
  const endMessage = "Obrigado!, entraremos em contato"
  allForm.innerHTML = endMessage;
};

function checkingPassword() {
  if(password.value === checkPassword.value) return true
  return false;
}

allForm.addEventListener('submit', function(event) {
  event.preventDefault();
  if(checkingPassword()){
    clearForm();
    showMessage();
    fetch('https://app.rdstation.com.br/signup', {
      method: 'POST',
      mode: 'no-cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(submitFormAnswer())
    }).then(response => response.json())
      .then((data) => { console.log(data)});

  } else {
    alert('Password divergente.');
  };
});

//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#supplying_request_options