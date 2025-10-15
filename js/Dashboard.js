// Dashboard.js
const botaoTema = document.getElementById("toggle-tema");
const body = document.body;

console.log("Dashboard.js carregado. Tema salvo:", localStorage.getItem("tema"));

// aplica tema salvo
if (localStorage.getItem("tema") === "escuro") {
  body.setAttribute("data-tema", "escuro");
  if (botaoTema) botaoTema.textContent = "☀️";
}

// verifica existência do botão
if (!botaoTema) {
  console.warn("Botão toggle-tema não encontrado. Verifique o id no HTML.");
} else {
  botaoTema.addEventListener("click", () => {
    const temaAtual = body.getAttribute("data-tema");
    if (temaAtual === "escuro") {
      body.removeAttribute("data-tema");
      localStorage.setItem("tema", "claro");
      botaoTema.textContent = "🌙";
      console.log("Tema: claro");
    } else {
      body.setAttribute("data-tema", "escuro");
      localStorage.setItem("tema", "escuro");
      botaoTema.textContent = "☀️";
      console.log("Tema: escuro");
    }
  });
}

// função sair (se usada no onclick)
function sair() {
  document.body.classList.add('fade-out');
  setTimeout(() => { window.location.href = "login.html"; }, 800);
}


function sair() {
  document.body.classList.add('fade-out');
  setTimeout(() => {
    window.location.href = "login.html";
  }, 800);
}