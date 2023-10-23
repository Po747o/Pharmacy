<?php

$usuario = $_POST['usuario'];
$senha = $_POST['senha'];

$_con = mysqli_connect('127.0.0.1','root','','techpharma');
if($_con===FALSE) {
    echo "Não foi possível conectar ao Servidor de banco de dados ";
} else{
    $consultasql = "SELECT * FROM login WHERE usuario_log = '$usuario' AND senha_log = '$senha'";

    $resultado = mysqli_query($_con, $consultasql);

    if (mysqli_num_rows($resultado) == 1) {
        $_SESSION['username'] = $username;
        header('Location: home.html');
    } else {
        echo '<script>alert("Credenciais inválidas. Tente novamente.");</script>';
        header('Refresh: 0; URL=login.html');
    }
}

?>