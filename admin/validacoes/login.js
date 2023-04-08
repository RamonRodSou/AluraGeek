// function validarLogin(){
//     const email = document.querySelector('[data-email]')
//     const senha = document.querySelector('[data-senha]')
  
//     if(email == "ramon@admin.com" && senha == "Ra123456"){
        
//         window.location.href = "./cadastro_produto.html";
//     }else{
//         alert("Acesso negado")
//     }
//   }
const emailLogin = document.querySelector('[data-email]');
const passwordLogin = document.querySelector('[data-senha]');
const login = document.querySelector('[data-login]');

login.addEventListener('click', (event) => {
  event.preventDefault();

  if (emailLogin.value === 'ramon@admin.com' && passwordLogin.value === 'Ra123456') {
    window.location.href = '../page/cadastro_produto.html'
  }
})