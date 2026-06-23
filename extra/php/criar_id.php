<?php
// Conexão com o banco
include "conexao.php";

// Faz a query
$sql = "SELECT id FROM alunos ORDER BY id DESC LIMIT 1";
$result = $con->query($sql);

if ($result->num_rows > 0) {
  $row = $result->fetch_assoc();
  $ultimo_id = $row['id'];   // pega o valor do id
  $novo_id = $ultimo_id + 1; // soma +1
} else {
  // Caso não haja registros, o próximo ID pode começar do 1
  $novo_id = 1;
}
