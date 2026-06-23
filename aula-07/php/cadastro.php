<?php

$form = $_POST;
$moedas = array(
  "Reais" => "Brasil",
  "Dólar" => "Estados Unidos",
  "Euro" => "Europa"
);
$i = 0;

foreach ($form as $item => $valor) {
  $form[$item] = ucfirst($valor);
  foreach ($moedas as $moeda => $regiao) {
    if ($valor == $regiao) {
      $form['moeda'] = $moeda;
    } else {
      $form['moeda'] = "Não encontrado";
    }
  }
}

$resultado = json_encode($form);

echo $resultado;
