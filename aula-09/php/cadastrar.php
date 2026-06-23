<?php

include "conexao.php";

$email = $_POST["email"];
$senha = $_POST["senha"];

$stmt = mysqli_stmt_init($con);
$query = "INSERT INTO usuario(email, senha) VALUES (?,?)";
mysqli_stmt_prepare($stmt, $query);
mysqli_stmt_bind_param($stmt, 'ss', $email, $senha);
$resultado = mysqli_stmt_execute($stmt);

if ($resultado == true) {
    $retorno["status"] = "s";
    $retorno["mensagem"] = "Cadastrado com sucesso!";
} else {
    $retorno["status"] = "n";
    $retorno["mensagem"] = "Erro ao cadastrar o usuário!";
}

$json = json_encode($retorno);
echo $json;
