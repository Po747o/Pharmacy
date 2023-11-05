
<?php

var_dump($_POST);

$Nome = $_POST['nome_pro'];
$Quant = $_POST['quant_ven_pro'];
$Subtotal = $_POST['subtotal_ven_pro'];
$Total = $_POST['totalInput'];
$Data = $_POST['data_ven'];

$NomeArray = explode(", ", $Nome);
$QuantArray = explode(", ", $Quant);
$SubtotalArray = explode(", ", $Subtotal);

$linhas = count($NomeArray);
$ID_pro = 0;
$ID_ven = 0;


$_con = mysqli_connect('127.0.0.1','root','','techpharma');
if($_con===FALSE) {
    echo '<script>alert("Não foi possível conectar ao Servidor de banco de dados");</script>';  
} else {

    $sql = "INSERT into venda values(null,'$Total','$Data')";
if (mysqli_query($_con, $sql)) {

    
} else {
      echo "Error: " . $sql . "<br>" . mysqli_error($_con);
}
}

$sql = "Select MAX(id_ven) from venda";
$result=  (mysqli_query($_con, $sql));

while ($row = $result->fetch_assoc()) {
    $ID_ven = $row["MAX(id_ven)"];
}

    
for($i =0; $i  < $linhas; $i++){
    $sql = "Select id_pro from prod where (nome_pro = '$NomeArray[$i]')";
    $resultado = (mysqli_query($_con, $sql));
    while ($row = $resultado->fetch_assoc()) {
        $ID_pro = $row["id_pro"];
    }

    $sql = "INSERT into venda_produto values(null,'$SubtotalArray[$i]','$QuantArray[$i]','$ID_pro','$ID_ven')";

    if (mysqli_query($_con, $sql)) {
        echo '<script>alert("Novo registro de venda_produto inserido com sucesso!");</script>';
        
    } else {
          echo "Error: " . $sql . "<br>" . mysqli_error($_con);
    }

    echo '<script>alert("Compra bem sucedida! Agradecemos pela Preferência :)");</script>';
    header('Refresh: 0; URL=../php/produto.php');
}

?>


<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="..\bootstrap\bootstrap-5.3.0-alpha3-dist\css\bootstrap.min.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="../css/layout.css">
    <link rel="shortcut icon" href="../imagens/logotechpharma.png" type="image/x-icon">
    <script async scr="../js/carrinho.js"></script>
    <title>TechPharma - Carrinho de Compras</title>
</head>

<body>
    <header class="cabecalho">
        <div class="titulo">
            <h1>CARRINHO DE COMPRAS</h1>
        </div>

    </header>
    <nav class="topnav">
        <div class="menu">
            <a href="home.html">HOME</a>
            <a href="produtos.html">PRODUTOS</a>
            <a href="ofertas.html">OFERTAS</a>
            <a href="servicosevacinas.html">SERVIÇOS E VACINAS</a>
            <a href="atendimento.html">ATENDIMENTO</a>
            <a href="quemsomos.html">QUEM SOMOS</a>
        </div>
    </nav>

    <!--<button type="button" class="button-hover-background">Adicionar ao carrinho</button> nos HTMLs de todas as páginas que contenham produtos
    // Botão add produto ao carrinho
  const addToCartButtons = document.getElementsByClassName("button-hover-background")
  for (var i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener("click", addProductToCart) no JS do carrinho-->

    <main>
        <div class="table-responsive">

        <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col" style="float: center;">ITEM</th>
                <th scope="col">NOME</th>
                <th scope="col">PREÇO</th>
                <th scope="col">QUANTIDADE</th>
                <th scope="col">REMOVER</th>
              </tr>
            </thead>

            <tbody id="cart-items">

              <tfoot>
                <tr>
                  <td colspan="3" class="cart-total-container">
                    <strong>TOTAL</strong>
                    <span>R$0,00</span>
                    <button type="button" class="btn btnVermelho">FINALIZAR COMPRA</button>
                  </td>
                </tr>
              </tfoot>
            </tbody>
          </table>
    </main>


    <footer class="footer">
        <div class="corpoFooter">
            <div class="colunaEsquerda">

                <div class="iconphone">
                    <img src="../imagens/iconetelefone.png" alt="#">
                </div>

                <div class="contato">
                    <h4>Entre em contato conosco! (69) 3456-7890</h4>
                    <h5>Atendimento das 08h00 às 22h00,<br> todos os dias da semana </h5>
                </div>

            </div>

            <div class="colunaDireita">

                <div class="redes">
                    <h4>Nos encontre em nossas redes sociais!</h4>
                </div>

                <div class="iconredes">
                <img src="../imagens/iconefacebook.png" alt="#">
                    <img src="../imagens/iconeinstagram.png" alt="#">
                    <img src="../imagens/iconetwitter.png" alt="#">
                    <img src="../imagens/iconeyoutube.png" alt="#">
                </div>

            </div>
    </footer>
</body>

</html>