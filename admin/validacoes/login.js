const emailLogin = document.querySelector('[data-email]');
const passwordLogin = document.querySelector('[data-senha]');
const login = document.querySelector('[data-login]');

login.addEventListener('click', (event) => {
  event.preventDefault();

  if (emailLogin.value === 'ramon@admin.com' && passwordLogin.value === 'Ra123456') {
    window.location.href = '../page/cadastro_produto.html'
  }
})