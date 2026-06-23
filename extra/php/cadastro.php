<?php

include "conexao.php";
include "criar_id.php";

$form = $_POST;
$nome = $form['nome'];
$sobrenome = $form['sobrenome'];
$email = $form['e-mail'];
$matricula = $form['matricula'];
$curso = $form['curso'];
$data_nascimento = $form['data_nascimento'];
$analise = [];

$id = $novo_id;

// Cálculo da idade
$dataNascimento = new DateTime($data_nascimento);
$dataAtual = new DateTime();
$idade = $dataAtual->diff($dataNascimento)->y;

$analise['idade'] = $idade;

$resultado = array_merge($form, $analise);
$json = json_encode($resultado);

mysqli_query($con, "INSERT INTO alunos (id, Nome, Sobrenome, Email, Matricula, Curso, DataNascimento, Idade) VALUES ('$id', '$nome', '$sobrenome', '$email', '$matricula', '$curso', '$data_nascimento', '$idade')");
