<?php

$con = mysqli_connect("localhost:3306", "root", "sql#banco", "bdprogweb");

// Exercício 1

if ($_POST != NULL) {
    $nome = $_POST["nome"];
    $descricao = $_POST["descricao"];
    $preco = $_POST["preco"];
    $query = "INSERT INTO produto(nome, descricao, preco) VALUES (?,?,?)";
    $stmt = mysqli_stmt_init($con);
    mysqli_stmt_prepare($stmt, $query);
    mysqli_stmt_bind_param($stmt, 'sss', $nome, $descricao, $preco);
    $resultado = mysqli_stmt_execute($stmt);
}

// Exercício 2
$query2 = "SELECT * FROM produto";
$stmt2 = mysqli_stmt_init($con);
mysqli_stmt_prepare($stmt2, $query2);
mysqli_stmt_execute($stmt2);
$resultado2 = mysqli_stmt_get_result($stmt2);
$dados = mysqli_fetch_all($resultado2, MYSQLI_ASSOC);
$json = json_encode($dados);
echo $json;
