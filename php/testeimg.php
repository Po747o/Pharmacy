<?php
$_con = mysqli_connect('127.0.0.1', 'root', '', 'techpharma');
if ($_con === FALSE) {
    die("Não foi possível conectar ao Servidor de banco de dados: " . mysqli_connect_error());
}

$sql = "SELECT imagem_pro FROM prod";
$result = mysqli_query($_con, $sql);
if (!$result) {
    die("Erro na consulta: " . mysqli_error($_con));
}


?>

<!DOCTYPE html>
<html>
<head>
    <title>Imagens de Produtos</title>
</head>
<body>
    <h1>Imagens de Produtos</h1>

    <?php
    while ($row = mysqli_fetch_assoc($result)) {
        $imagem_base64 = base64_encode($row['imagem_pro']);
        echo '<img src="data:image/jpeg;base64,' . $imagem_base64 . '"/><br>';
    }
    ?>

    <?php
    // Feche a conexão com o banco de dados
    mysqli_close($_con);
    ?>
</body>
</html>