<?php 
$nome = $_POST['nome'];
$dataNasc = $_POST['dataNasc'];
$cpf = $_POST['cpf'];
$celular = $_POST['celular'];
$salario = $_POST['salario'];
$funcao = $_POST['funcao'];
$sexo = $_POST['sexo'];
$rg = $_POST['rg'];

$_con = mysqli_connect('127.0.0.1','root','','techpharma');
if($_con===FALSE) {
    echo "Não foi possível conectar ao Servidor de banco de dados ";
} else {
    // Exemplo: SQL query
    // $result = mysqli_query($_con, "use bd_escola;");
    $sql = "INSERT into funcionario values(null,'$nome','$cpf','$rg','$dataNasc','$sexo','$celular','$funcao','$salario')";
if (mysqli_query($_con, $sql)) {
    echo '<script>alert("Novo registro inserido com sucesso!");</script>';
    header('Refresh: 0; URL=../cadastrarfuncionario.html');
} else {
      echo "Error: " . $sql . "<br>" . mysqli_error($_con);
}

    mysqli_close($_con);
}
?>