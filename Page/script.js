// MENU drop down

const menu = document.querySelector(".menu");
const menuTwo = document.querySelectorAll(".header__nav_item")[1];

function handleMenu() {
  menu.classList.toggle("menu_opened");
}

menuTwo.addEventListener("click", function() {
  handleMenu();
});


// FORM input select options
const selectJob = document.querySelector('.select-job');
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

function addOptionsToSelectJobs(jobs) {
  return jobs.forEach((job, key) => selectJob[key + 1] = new Option(job, key + 1));
}

selectJob.addEventListener('click', addOptionsToSelectJobs(jobs));

// FORM write website change the radio input

const website = document.querySelectorAll('.form__input_radio');
const mySite = document.getElementById('radio_true');
const websiteAdress = document.getElementById('website-true');

function changeRadioInput(){
  mySite.checked = true;
  mySite.required = true;
}

function handleWebsiteInput(){
  const userValue = websiteAdress.value;
  websiteAdress.value = `http://${websiteAdress.value}`;
}

websiteAdress.addEventListener('keypress',changeRadioInput());
websiteAdress.addEventListener('change', handleWebsiteInput);
//Mask phone number

const tel = document.getElementById('input-phone')
function maskPhone(valor) {
  valor = valor.replace(/\D/g, "")
  valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2")
  valor = valor.replace(/(\d)(\d{4})$/, "$1-$2")
  tel.value = valor
}
tel.addEventListener('keypress', (event) => maskPhone(event.target.value));
tel.addEventListener('change', (event) => maskPhone(event.target.value));

const password = document.getElementById('input-password');
const checkPassword = document.getElementById('input-confirme-password')


//DEMO - show IFRAME

const iframe = document.querySelector(".demo__iframe");
const playButton = document.querySelector(".button__demo");

function handleIframe() {
  iframe.style.display = "flex";
}

playButton.addEventListener("click", handleIframe);

