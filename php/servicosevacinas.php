<?php 
$nome = $_POST['nome'];
$fabricante = $_POST['fabricante'];
$duracao = $_POST['duracao'];
$valor = $_POST['valor'];
$tipo = $_POST['tipo'];
$local = $_POST['local'];
$profissional = $_POST['profissional'];
$quant = $_POST['quant'];

$_con = mysqli_connect('127.0.0.1','root','','bd_techpharma_web');
if($_con===FALSE) {
    echo "Não foi possível conectar ao Servidor de banco de dados ";
} else {
    echo "Foi possível conectar ao Servidor de banco de dados ";
    // Exemplo: SQL query
    // $result = mysqli_query($_con, "use bd_escola;");
    $sql = "INSERT into servico values(null,'$nome','$fabricante','$duracao','$valor','$tipo','$local','$profissional','$quant','$quant')";
if (mysqli_query($_con, $sql)) {
      echo "Novo registro inserido com sucesso!";
} else {
      echo "Error: " . $sql . "<br>" . mysqli_error($_con);
}

    mysqli_close($_con);
}
?>