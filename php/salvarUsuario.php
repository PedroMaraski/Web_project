<?php

header("Content-Type: application/json; charset=UTF-8");

// conexão com o banco de dados
$conexao = mysqli_connect("localhost", "root", "", "trabalhoweb");

if(!$conexao){
    echo json_encode(["erro" => "Falha na conexão: " . mysqli_connect_error()]);
    exit;
}

// captura os dados enviados
$email = $_POST["email"] ?? "";
$senha = $_POST["senha"] ?? "";

// insere no banco
$sql = "INSERT INTO usuarios (email, senha) VALUES (?, ?)";
$stmt = mysqli_prepare($conexao, $sql);

if(!$stmt){
    echo json_encode(["status" => "erro", "mensagem" => "Erro no prepare: " . mysqli_error($conexao)]);
    exit;
}

mysqli_stmt_bind_param($stmt, "ss", $email, $senha);

if(mysqli_stmt_execute($stmt)){
    echo json_encode([
        "status" => "ok",
        "mensagem" => "Registro realizado com sucesso."
    ]);
} else {
    echo json_encode([
        "status" => "erro",
        "mensagem" => "Erro ao registrar: " . mysqli_error($conexao)
    ]);
}
