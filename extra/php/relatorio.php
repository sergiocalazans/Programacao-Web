<?php

include "conexao.php";

$resultado = mysqli_query($con, "SELECT * FROM alunos ORDER BY id DESC");

$i = 0;

while ($registro = mysqli_fetch_assoc($resultado)) {
  $dados[$i]["id"] = $registro["id"];
  $dados[$i]["Nome"] = $registro["Nome"];
  $dados[$i]["Sobrenome"] = $registro["Sobrenome"];
  $dados[$i]["Email"] = $registro["Email"];
  $dados[$i]["Matricula"] = $registro["Matricula"];
  $dados[$i]["Curso"] = $registro["Curso"];
  $dados[$i]["DataNascimento"] =  $registro["DataNascimento"];
  $dados[$i]["Idade"] = $registro["Idade"];
  $i++;
}

$objetoJSON = json_encode($dados);
echo $objetoJSON;
