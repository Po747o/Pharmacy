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
    $sql = "INSERT into produto values(null,'$nome','$tipo','$pesovolume','$codigo','$fornecedor','$estoque','$valorcompra','$valorvenda')";
if (mysqli_query($_con, $sql)) {
    echo '<script>alert("Novo registro inserido com sucesso!");</script>';
    header('Refresh: 0; URL=../cadastrarproduto.html');
} else {
      echo "Error: " . $sql . "<br>" . mysqli_error($_con);
}

    mysqli_close($_con);
}
?>