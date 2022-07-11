// MENU drop down

const menu = document.querySelector(".menu");
const menuTwo = document.querySelectorAll(".header__nav_item")[1];

const sanduicheIcon = document.querySelector('.sanduiche');
const sanduicheMenu  = document.querySelector('.menu__sanduiche');
const sanduicheBox = document.querySelector('.sanduiche__container');
const navMenu = document.querySelector('.header__nav');
const closeBtn = document.querySelector('.sanduiche_close-btn');

function changeToExitIcon() {
  sanduicheIcon.style.display = 'none';
  closeBtn.style.display = 'flex';
}

function changeToSanduicheIcon() {
  sanduicheIcon.style.display = 'flex';
  closeBtn.style.display = 'none';
}

function openSanduicheMenu() {
  sanduicheMenu.style.display = 'flex';
  closeBtn.style.display = 'flex';
  sanduicheBox.style.display = "flex";
  navMenu.style.display = "flex";
}

function closeSanduicheMenu() {
  sanduicheMenu.style.display = 'none';
  closeBtn.style.display = 'none';
  sanduicheBox.style.display = "none";
  navMenu.style.display = "none";
}

sanduicheIcon.addEventListener('click', () =>{ 
  changeToExitIcon();
  openSanduicheMenu();
});

closeBtn.addEventListener('click', () =>{ 
  closeSanduicheMenu();
  changeToSanduicheIcon();
});

function handleMenu() {
  menu.classList.toggle("menu_opened");
}

menuTwo.addEventListener("click", () => handleMenu());




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

// carousel

const indicator = document.querySelector('.carousel__indicator');
const track = document.querySelector('.benefits__cards');
const slides = Array.from(track.children);
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

function setSlidePosition(slide, index) {
  slide.style.left = slideWidth * index + 'px';
}

slides.forEach(setSlidePosition);

function moveToSlide(track, currentSlide, targetSlide) {
  track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  currentSlide.classList.remove('.current-slide');
  targetSlide.classList.add('.current-slide');
}

dotsNav.addEventListener('click', event => {
  const targetDot = event.target.closest('button');

  if(!targetDot) return;

  const currentSlide = track.querySelector('.current-slide');
  const currentDot = dotsNav.querySelector('.current-slide');
  const targetIndex = dots.findIndex(dot => dot === targetDot);
  const targetSlide = slides[targetIndex];

  moveToSlide(track, currentSlide, targetSlide)

  currentDot.classList.remove('.current-slide');
  targetDot.classList.add('.current-slide');
})
