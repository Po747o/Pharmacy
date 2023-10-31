<?php 
$nome = $_POST['nome'];
$tipo = $_POST['tipo'];
$pesovolume = $_POST['pesovolume'];
$codigo = $_POST['codigo'];
$fornecedor = $_POST['fornecedor'];
$estoque = $_POST['estoque'];
$valorcompra = $_POST['valorcompra'];
$valorvenda = $_POST['valorvenda'];


$_con = mysqli_connect('127.0.0.1','root','','techpharma');
if($_con===FALSE) {
    echo "Não foi possível conectar ao Servidor de banco de dados ";
} else {
    echo "Foi possível conectar ao Servidor de banco de dados ";
    // Exemplo: SQL query
    // $result = mysqli_query($_con, "use bd_escola;");
    // Processar o upload da imagem
if (isset($_FILES['imagem']) && $_FILES['imagem']['error'] === UPLOAD_ERR_OK) {
    $nome_imagem = $_FILES['imagem']['name'];
    $caminho_temporario = $_FILES['imagem']['tmp_name'];

    // Ler os dados binários da imagem
    $dados_imagem = file_get_contents($caminho_temporario);

    // Inserir a imagem na tabela
   /* $sql = "INSERT INTO imagens (nome, imagem) VALUES (?, ?)";
    $stmt = $_con->prepare($sql);
    $stmt->bind_param("sb", $nome_imagem, $dados_imagem);*/

    $sql = "INSERT into produto values(null,'$nome','$tipo','$pesovolume','$codigo','$fornecedor','$estoque','$valorcompra','$valorvenda',$dados_imagem)";
    if (mysqli_query($_con, $sql)) {
        echo "Novo registro inserido com sucesso!";
    } else {
          echo "Error: " . $sql . "<br>" . mysqli_error($_con);
    }

    if ($stmt->execute()) {
        echo "Imagem inserida com sucesso no banco de dados.";
    } else {
        echo "Erro ao inserir a imagem no banco de dados: " . $stmt->error;
    }

    $stmt->close();
} else {
    echo "Erro no upload da imagem.";
}

// Fechar a conexão com o banco de dados

 

    mysqli_close($_con);
}
?>