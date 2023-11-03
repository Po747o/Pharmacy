<?php 
$nome = $_POST['nome'];
$dataNasc = $_POST['dataNasc'];
$cpf = $_POST['cpf'];
$celular = $_POST['celular'];
$cep = $_POST['cep'];
$email = $_POST['email'];
$sexo = $_POST['sexo'];
$rg = $_POST['rg'];

$_con = mysqli_connect('127.0.0.1','root','','techpharma');
if($_con===FALSE) {
    echo "Não foi possível conectar ao Servidor de banco de dados ";
} else {
    echo "Foi possível conectar ao Servidor de banco de dados ";
    // Exemplo: SQL query
    // $result = mysqli_query($_con, "use bd_escola;");
    $sql = "INSERT into cliente values(null,'$nome','$dataNasc','$cpf','$celular','$cep','$email','$sexo','$rg')";
if (mysqli_query($_con, $sql)) {

    echo '<script>alert("Novo registro inserido com sucesso!");</script>';
    header('Refresh: 0; URL=../CadastrarCliente.html');
} else {
      echo "Error: " . $sql . "<br>" . mysqli_error($_con);
}

    mysqli_close($_con);
}
?>