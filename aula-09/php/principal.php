<?php

include "conexao.php";

$query = "SELECT * FROM vw_usuario_email";

$resultado = mysqli_query($con, $query);

$dados = mysqli_fetch_all($resultado, MYSQLI_ASSOC);
$json = json_encode($dados);

echo $json;
