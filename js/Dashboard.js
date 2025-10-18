// Dashboard.js
const botaoTema = document.getElementById("tema-btn");
const body = document.body;

console.log("Dashboard.js carregado. Tema salvo:", localStorage.getItem("tema"));

// aplica tema salvo
if (localStorage.getItem("tema") === "escuro") {
  body.setAttribute("data-tema", "escuro");
}

// verifica existência do botão
if (!botaoTema) {
  console.warn("Botão tema-btn não encontrado. Verifique o id no HTML.");
} else {
  botaoTema.addEventListener("click", () => {
    const temaAtual = body.getAttribute("data-tema");
    if (temaAtual === "escuro") {
      body.removeAttribute("data-tema");
      localStorage.setItem("tema", "claro");
      console.log("Tema: claro");
    } else {
      body.setAttribute("data-tema", "escuro");
      localStorage.setItem("tema", "escuro");
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

document.addEventListener("DOMContentLoaded", () => {
  const abrirConfig = document.getElementById("abrir-config");
  const voltarBtn = document.getElementById("voltar-btn");
  const sidebarNormal = document.querySelector(".Barra-normal");
  const sidebarConfig = document.querySelector(".sidebar-config");

  // quando clicar em "Configurações"
  abrirConfig.addEventListener("click", (e) => {
    e.preventDefault();
    sidebarNormal.classList.remove("ativo");
    sidebarConfig.classList.add("ativo");
  });

  // quando clicar em "Voltar"
  voltarBtn.addEventListener("click", () => {
    sidebarConfig.classList.remove("ativo");
    sidebarNormal.classList.add("ativo");
  });

  // (opcional) voltar automaticamente ao sair da área
  sidebarConfig.addEventListener("mouseleave", () => {
    sidebarConfig.classList.remove("ativo");
    sidebarNormal.classList.add("ativo");
  });
});