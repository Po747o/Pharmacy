<?php
// Conexão com o banco de dados
$_con = mysqli_connect('127.0.0.1', 'root', '', 'techpharma');

if ($_con === FALSE) {
    die("Não foi possível conectar ao Servidor de banco de dados: " . mysqli_connect_error());
}

// Coletar os dados do formulário
$nome = $_POST['nome'];
$tipo = $_POST['tipo'];
$pesovolume = $_POST['pesovolume'];
$codigo = $_POST['codigo'];
$fornecedor = $_POST['fornecedor'];
$estoque = $_POST['estoque'];
$valorcompra = $_POST['valorcompra'];
$valorvenda = $_POST['valorvenda'];

// Processar o upload da imagem
if (isset($_FILES['imagem']) && $_FILES['imagem']['error'] === UPLOAD_ERR_OK) {
    $imagem_nome = $_FILES['imagem']['name'];
    $caminho_temporario = $_FILES['imagem']['tmp_name'];
    $dados_imagem = file_get_contents($caminho_temporario);

    // Inserir os dados no banco de dados
    $sql = "INSERT INTO prod (nome_pro, tipo_pro, peso_volume_pro, codigo_barra_pro, fornecedor_pro, estoque_pro, valor_compra_pro, valor_venda_pro, imagem_pro) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    $stmt = $_con->prepare($sql);
    $stmt->bind_param("ssssssdds", $nome, $tipo, $pesovolume, $codigo, $fornecedor, $estoque, $valorcompra, $valorvenda, $dados_imagem);

    if ($stmt->execute()) {
        echo "Produto inserido com sucesso!";
    } else {
        echo "Erro ao inserir o produto no banco de dados: " . $stmt->error;
    }

    $stmt->close();
} else {
    echo "Erro no upload da imagem.";
}

// Fechar a conexão com o banco de dados
mysqli_close($_con);
?>