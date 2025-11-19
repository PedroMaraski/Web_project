const botaoEntrar = document.getElementById('entrar');

botaoEntrar.addEventListener('click', async () => {

    console.log("Botão clicado!"); //teste

    // pega os valores dos inputs
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    // coloca no FormData para enviar pro PHP
    const dados = new FormData();
    dados.append("email", email);
    dados.append("senha", senha);

    // envia para o PHP
    const resposta = await fetch("php/verificacaoUsuario.php", {
        method: "POST",
        body: dados
    });

    const resultado = await resposta.json();
    console.log("Resposta do servidor:", resultado);

    // usuário não existe
    if (resultado.status === "nao_encontrado") {
        console.log("Nenhuma conta encontrada! Redirecionando para Registro...");
        setTimeout(() => {
            window.location.href = "registro.html";
        }, 800); //mesmo tempo da transição no CSS
        return;
    }

    // senha errada
    if (resultado.status === "senha_incorreta") {
        console.log("Senha incorreta!");
        return;
    }

    // LOGIN OK → mantém exatamente sua animação original
    if (resultado.status === "ok") {

        document.body.classList.add('fade-out');

        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 800); //mesmo tempo da transição no CSS
    }
});
