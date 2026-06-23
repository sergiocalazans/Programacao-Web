<?php
    // Define que a resposta será no formato JSON
    header('Content-Type: application/json');

    // Carrega o conteúdo do arquivo JSON
    $usuarios_json = file_get_contents('../data/usuarios.json');
    // Decodifica o JSON para um array associativo
    $usuarios = json_decode($usuarios_json, true);

    // Pega os dados enviados pelo formulário
    $usuario_form = $_POST['usuario'];
    $senha_form = $_POST['senha'];

    $resposta = [
        'sucesso' => false,
        'mensagem' => 'Usuário ou senha incorretos.'
    ];

    // Verifica se o usuário existe no array e se a senha corresponde
    if (array_key_exists($usuario_form, $usuarios) && $usuarios[$usuario_form] === $senha_form) {
        $resposta = [
            'sucesso' => true,
            'mensagem' => 'Login realizado com sucesso!'
        ];
    }

    // Retorna a resposta como JSON
    echo json_encode($resposta);
?>