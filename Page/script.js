// MENU

const menu = document.querySelector(".menu");
const menuTwo = document.querySelectorAll(".header__nav_item")[1];

function handleMenu() {
  menu.classList.toggle("menu_opened");
}

menuTwo.addEventListener("click", () => {
  handleMenu();
});


// FORM 
const jobs = [
  'Sócio(a) / CEO / Proprietário(a)',
  'Diretor(a) de Vendas',
  'Diretor(a) de Marketing',
  'Diretor(a) Outras Áreas',
  'Gerente de Marketing',
  'Gerente de Vendas',
  'Coordenador(a)/Supervisor(a) de Marketing',
  'Coordenador(a)/Supervisor(a) de Vendas',
  'Analista/Assistente de Marketing',
  'Analista/Assistente de Vendas',
  'Vendedor(a) / Executivo(a) de Contas',
  'Estudante',
  'Outros Cargos',
];

const selectJob = document.querySelector('.select-job');
const allForm = document.querySelector('hero-form');
const clearForm = () => { allForm.innerHTML = ''; };
const website = document.querySelectorAll('.website');
const allInput = document.querySelectorAll('.form__input');
const submit = document.querySelector('#submit-btn');

function addOptionsToSelectJobs(jobs) {
  return jobs.forEach((job, key) => selectJob[key+1] = new Option(job,key+1));
}

selectJob.addEventListener('click', addOptionsToSelectJobs(jobs));

let inputWebsite = '';
let inputJob = '';

function checkJobInput() {
  selectJob.forEach((input) => {
    input.addEventListener('click', (event) => {
      selectJob = event.target.value;
    });
  });
}

function checkFormSubmit() {
  return allInput.forEach((input) => {
    if (input.value !== '') {
      submit.disabled = false;
    } else {
      submit.disabled = true;
    }
  });
}

let formAnswers = [];

function saveFormInformation() {
  const currentFormAnswers = {
    name: document.querySelector('.input-name').value,
    email: document.qduerySelector('.input-email').value,
    phone: document.querySelector('.input-phone').value,
    job: checkJobInput(),
    password: document.querySelector('.input-password').value,
    website:checkJobInput(),
  }
  return formAnswers.push(currentFormAnswers);
}

function submitFormAnswer() {
  const endMessage = "Obrigado!, entraremos em contato"
  allForm.innerHTML = endMessage;
}

function onFormSubmit() {
  checkFormSubmit();
  saveFormInformation();
  clearForm();
  submitFormAnswer();
}

// submit.addEventListener('click', (event) => {
//   event.preventDefault();
//   checkFormSubmit();
//   saveFormInformation();
//   clearForm();
//   submitFormAnswer();
// });


//DEMO - IFRAME

const iframe = document.querySelector(".demo__iframe");
const playButton = document.querySelector(".button__demo");

function handleIframe() {
  iframe.classList.toggle("iframe_opened");
}

playButton.addEventListener("click", () => {
  handleIframe();
});