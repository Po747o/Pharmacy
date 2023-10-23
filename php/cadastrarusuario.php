
<?php

$usuario = $_POST['usuario'];
$senha = $_POST['senha'];
$senhaconf = $_POST['senhaconf'];

$_con = mysqli_connect('127.0.0.1', 'root', '', 'techpharma');
if ($_con === FALSE) {
    echo "Não foi possível conectar ao Servidor de banco de dados ";
} else {

    if ($senha == $senhaconf) {
        $consultasql = "SELECT * FROM login WHERE usuario_log = '$usuario'";

        $resultado = mysqli_query($_con, $consultasql);

        if (mysqli_num_rows($resultado) == 1) {
            echo '<script>alert("Esse usuário ja existe! Tente outro nome.");</script>';
            header('Refresh: 0; URL=cadastrarusuario.html');
        } else {
            $insertsql = "INSERT INTO login values (null,'$usuario','$senha')";

            $resultado = mysqli_query($_con, $insertsql);

            header('Location: ../login.html');
        }
    } else {
        echo '<script>alert("Digite a mesma senha na confirmação!");</script>';
        header('Refresh: 0; URL=../cadastrarusuario.html');
    }
}

?>