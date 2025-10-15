function sair() {
  document.body.classList.add('fade-out');
  setTimeout(() => {
    window.location.href = "login.html";
  }, 800);
}