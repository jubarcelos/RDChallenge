// MENU

const menu = document.querySelector(".menu");
const menuTwo = document.querySelectorAll(".header__nav_item")[1];

function handleMenu() {
  menu.classList.toggle("menu__opened");
}

menuTwo.addEventListener("click", () => {
  handleMenu();
  //animation
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

function addOptionsToSelectJobs(jobs) {
  return jobs.forEach((job, key) => selectJob[key] = new Option(job,key));
}

selectJob.addEventListener('click', addOptionsToSelectJobs(jobs));

