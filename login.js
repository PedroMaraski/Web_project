const botaoEntrar = document.getElementById('entrar');

botaoEntrar.addEventListener('click', () => {
  document.body.classList.add('fade-out');
  
  // Espera a animação e redireciona para o dashboard
  setTimeout(() => {
    window.location.href = "dashboard.html";
  }, 800); // mesmo tempo da transição no CSS
});

