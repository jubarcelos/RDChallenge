const TOP_BAR_SELECTOR = document.querySelector('.header');
const RD_LOGO_SELECTOR = document.querySelector('.header-logo');
const NAV_HEADER = document.querySelector('.header__nav');
const MENU = document.querySelector('.menu');
const MENU_TWO = document.querySelector(".header__nav_item")[1];
const BUTTON_ONE = document.querySelector('.button__header_white');
const BUTTON_TWO = document.querySelector('.button__header_blue');
const HERO_SHAPE = document.querySelector('.hero__shape');
const HERO_ARTICLE = document.querySelector('.hero__article');
const FORM = document.querySelector('.form');
const FORM_NAME = document.getElementById('input-name');
const FOR_EMAIL = document.getElementById('input-email');
const FORM_PHONE = document.getElementById('input-phone');
const FORM_JOB = document.querySelector('.select-job');
const PASSWORD = document.getElementById('input-password');
const CHECK_PASSWORD = document.getElementById('input-confirme-password');
const RADIO = document.querySelector('.form__input_radios');
const RADIO_TRUE = document.getElementById('radio-true');
const RADIO_FALSE = document.getElementById('radio-false');
const WEBSITE = document.getElementById('website-true');
const AGREEMENT = document.querySelector('.agreement');
const ACCOUNT = document.querySelector('.submit-btn');
const LABEL_NAME_TEXT = 'Diga, qual o seu nome?';
const LABEL_EMAIL_TEXT = 'Seu email de trabalho';
const LABEL_PHONE_TEXT = 'Seu telefone';
const LABEL_JOB_TEXT = 'Seu cargo de ocupação';
const LABEL_PASSWORD = 'Crie uma senha';
const LABEL_CHECK_PASSWORD = 'Confirme sua senha';
const LABEL_RADIO = 'Qual o site da sua empresa?';
const LABEL_RADIO_TRUE = 'Meu site é';
const LABEL_RADIO_FALSE = 'Ainda não tenho site';
const TOGETHER = document.querySelector('.together');
const BACKGROUND_TOGETHER = document.querySelector('.together__background');
const TOGETHER_SHAPE = document.querySelector(',together__shape');
const TOGETHER_ARTICLE = document.querySelector('.article__together');
const LISTER = document.querySelector('.list');
const LIST_SHAPE = document.querySelector('.list__shape');
const LIST_PHOTO = document.querySelector('.list__photo');
const LIST_ARTICLE = document.querySelector('.article__list');



describe('RDStation-test', () => {
  beforeEach(() => {
    cy.visit('Page/index.html');
  });

  describe('1 - Faz verificações do HEADER', () => {
    it('Verifica se os elementos do `header` existem', () => {
      cy.get(TOP_BAR_SELECTOR).should('exist');
      cy.get(RD_LOGO_SELECTOR).should('exist');
      cy.get(NAV_HEADER).should('exist');
      cy.get(MENU).should('exist');
      cy.get(MENU_TWO).should('exist');
      cy.get(BUTTON_ONE).should('exist');
      cy.get(BUTTON_TWO).should('exist');
    });

    it('Verifica se a classe `nav_header` deve determinar que o elemento é um grid container', () => {
      cy.get(NAV_HEADER).should('have.css', 'display', 'grid');
    });
  });

  describe('2 - Faz verificações do HERO', () => {
    it('Existe uma div com a class `hero__shape`', () => {
      cy.get(HERO_SHAPE).should('exist');
    });

    it('Existe um formulário com a classe "form"', () => {
      cy.get(FORM).should('exist');
    });
    it('Existe um input com o atributo name igual a "name" and placeholder igual a "Insira seu nome"', () => {
      cy.get(`${FORM_NAME} input[name=name]`)
        .should('have.attr', 'placeholder')
        .and('match', /Insira seu nome/)
    });
    it('Existe um input com o atributo name igual a "email" e o placeholder igual a "Email"', () => {
      cy.get(`${FORM_EMAIL} input[name=email]`)
        .should('have.attr', 'placeholder')
        .and('match', /Insira seu e-mail/)
    });

    it('Existe um input com o atributo name igual a "phone" e o placeholder igual a "Insira seu número de telefone com DDD"', () => {
      cy.get(`${FORM_PHONE} input[name=phone]`)
        .should('have.attr', 'placeholder')
        .and('match', /Insira seu número de telefone com DDD/)
    });

    it('Existe um input com o atributo name igual a "password" e o placeholder igual a "........"', () => {
      cy.get(`${PASSWORD} input[name=password]`)
        .should('have.attr', 'placeholder')
        .and('match', /......../)
    });

    it('Existe um input com o atributo name igual a "check-password" e o placeholder igual a "Branding-rd@2021*"', () => {
      cy.get(`${CHECK_PASSWORD} input[name=check-password]`)
        .should('have.attr', 'placeholder')
        .and('match', /Branding-rd@2021*/)
    });
  
    it('Existe um botão que contém o texto "criar minha conta"', () => {
      cy.get(`${ACCOUNT} button`)
        .should('have.text', 'criar minha conta');
    });
  
    it('O formulário é um flex container', () => {
      cy.get(FORM).should('have.css', 'display', 'flex');
    });
  
    it('O formulário deve estar a direita da logo', () => {
      cy.get(FORM).should('be.rightOf', HERO_ARTICLE);
    })
  
    it('Ao clicar no botão com senha diferente de confere senha, emite um alerta contendo o texto "Password divergente."', () => {
      const stub = cy.stub();
      cy.on('window:alert', stub);
      cy.get(`${PASSWORD} input[name=password]`).type('Ju1414');
      cy.get(`${CHECK_PASSWORD} input[name=check-password]`).type('Ju1413');
      cy.get(`${ACCOUNT} button`).click().then(() => {
        expect(stub.getCall(0)).to.be.calledWith('Password divergente.');
      });
    });
  });
  // testar todos os label do forms e article etc.
  describe('3 - Faz verificações do TOGETHER', () => {
    it('Verifica a existência da section com a class `together` e seus elementos', () => {
      cy.get(TOGETHER).should('exist');
      cy.get(BACKGROUND_TOGETHER).should('exist');
      cy.get(TOGETHER_SHAPE).should('exist');
      cy.get(TOGETHER_ARTICLE).should('exist');
    });

    it('Existe uma div com a class `together__background`', () => {
      cy.get(BACKGROUND_TOGETHER).should('have.css', 'background');
    });

    it('Existe uma div com a class `together__shape`', () => {
      cy.get(TOGETHER_SHAPE).should('have.css', 'background');
    });
  });

  describe('4 - Verifica elementos do `LIST`', () => {
    it('Verifica a existência da section com a class `list` e seus elementos', () => {
      cy.get(LIST).should('exist');
      cy.get(LIST_SHAPE).should('exist');
      cy.get(LIST_PHOTO).should('exist');
      cy.get(LIST_ARTICLE).should('exist');
    });
  });
});