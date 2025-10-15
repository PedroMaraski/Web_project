const botaoEntrar = document.getElementById('entrar');

botaoEntrar.addEventListener('click', () => {
    console.log("Botão clicado!"); // teste
  // Adiciona a classe que faz o corpo desaparecer
  document.body.classList.add('fade-out');

  // Espera a animação e redireciona para o dashboard
  setTimeout(() => {
    window.location.href = "dashboard.html";
  }, 800); // mesmo tempo da transição no CSS
});

function sair() {
  document.body.classList.add('fade-out');
  setTimeout(() => {
    window.location.href = "login.html";
  }, 800);
}