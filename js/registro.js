const botaoRegistrar = document.getElementById('registrar');

// Verifica se o botão existe antes de adicionar o listener
if (botaoRegistrar) {

    botaoRegistrar.addEventListener('click', async () => {

        console.log("Botão Registrar clicado!");

        // 1. pega o formulário
        const form = document.getElementById("registroForm");

        // Verifica se o form existe (evita erro caso o HTML mude)
        if (!form) {
            console.log("Formulário 'registroForm' não encontrado.");
            return;
        }

        // 2. captura os dados do formulário
        const dados = new FormData(form);

        try {
            // 3. envia para o PHP
            // Caminho relativo à página HTML
            const resposta = await fetch("php/salvarUsuario.php", {
                method: "POST",
                body: dados
            });

            // Verifica se o servidor respondeu (erro 404, 500, etc)
            if (!resposta.ok) {
                console.log("Erro na requisição HTTP:", resposta.status, resposta.statusText);
                return;
            }

            // 4. recebe a resposta do PHP em JSON
            const resultado = await resposta.json();
            console.log("Resposta do servidor:", resultado);

            // 5. verifica se o PHP retornou sucesso
            if (resultado.status === "ok") {

                console.log("Registro realizado com sucesso!");

                // animação (se existir no CSS)
                document.body.classList.add('fade-out');

                // redirecionamento após um tempo
                setTimeout(() => {
                    window.location.href = "Dashboard.html";
                }, 500);

            } else {
                // Exibe mensagem de erro vinda do PHP
                console.log("Erro no registro:", resultado.mensagem);
            }

        } catch (erro) {
            // Captura erros de rede ou JSON inválido
            console.log("Erro ao enviar ou processar a requisição:", erro);
        }
    });

} else {
    console.log("Botão 'registrar' não encontrado.");
}
