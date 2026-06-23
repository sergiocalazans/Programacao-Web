<?php

include "conexao.php";

$form = $_POST;
$email = $form["email"];
$senha = $form["senha"];
$query = "SELECT email, senha FROM usuario WHERE email = ? AND senha = ?";
$stmt = mysqli_stmt_init($con);
mysqli_stmt_prepare($stmt, $query);
mysqli_stmt_bind_param($stmt, 'ss', $email, $senha);
$resultado = mysqli_stmt_execute($stmt);

$retorno = array(
  "resposta" => 0,
  "mensagem" => "Acesso negado!"
);

if ($resultado == true) {
  $retorno["resposta"] = 1;
  $retorno["mensagem"] = "Acesso permitido!";
}

$json = json_encode($retorno);

echo $json;
