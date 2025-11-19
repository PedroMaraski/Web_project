<?php

// ---------- CONFIGURAÇÃO DO RETORNO ----------
header("Content-Type: application/json; charset=UTF-8");

// ---------- CONEXÃO COM O BANCO DE DADOS ----------
$conexao = mysqli_connect("localhost", "root", "", "trabalhoweb");

// Se der erro na conexão, retorna JSON avisando
if(!$conexao){
    echo json_encode([
        "status" => "erro",
        "mensagem" => mysqli_connect_error()
    ]);
    exit;
}


// ---------- CAPTURA DOS DADOS ENVIADOS PELO JS ----------
$email = $_POST["email"] ?? "";
$senha = $_POST["senha"] ?? "";

// Verifica se email e senha foram preenchidos
if(empty($email) || empty($senha)){
    echo json_encode([
        "status" => "erro",
        "mensagem" => "Preencha todos os campos"
    ]);
    exit;
}


// ---------- BUSCA USUÁRIO PELO EMAIL ----------
$sql = "SELECT senha FROM usuarios WHERE email = ?";
$stmt = mysqli_prepare($conexao, $sql);
mysqli_stmt_bind_param($stmt, "s", $email);
mysqli_stmt_execute($stmt);

$result = mysqli_stmt_get_result($stmt);


// ---------- CASO O EMAIL NÃO EXISTA NO BANCO ----------
if(mysqli_num_rows($result) === 0){
    echo json_encode([
        "status" => "nao_encontrado" // enviado para o JS
    ]);
    exit;
}


// ---------- O EMAIL EXISTE, PEGAMOS A SENHA DO BANCO ----------
$user = mysqli_fetch_assoc($result);

// IMPORTANTE: trim() remove espaços extras da senha
// Isso evita que senhas armazenadas com espaços deem falso positivo
$senhaBanco = trim($user["senha"]);
$senhaDigitada = trim($senha);


// ---------- SENHA INCORRETA ----------
if ($senhaBanco !== $senhaDigitada) {
    echo json_encode([
        "status" => "senha_incorreta"
    ]);
    exit;
}


// ---------- LOGIN BEM-SUCEDIDO ----------
echo json_encode([
    "status" => "ok"
]);

