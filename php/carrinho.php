<?php
//$carrinhoArray = $_POST("arrayCarrinho[]");
$carrinhoArray = $_POST['arrayCarrinho'];
$array = explode(", ", $carrinhoArray);
$_con = mysqli_connect('127.0.0.1','root','','techpharma');
if($_con===FALSE) {
    echo '<script>alert("Não foi possível conectar ao Servidor de banco de dados");</script>';  
} else {

    
    
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
            <a href="../home.html">HOME</a>
            <a href="produto.php">PRODUTOS</a>
            <a href="../servicosevacinas.html">SERVIÇOS E VACINAS</a>
            <a href="../atendimento.html">ATENDIMENTO</a>
            <a href="../quemsomos.html">QUEM SOMOS</a>
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
        <th scope="col">NOME</th>
        <th scope="col">PREÇO</th>
        <th scope="col">QUANTIDADE</th>
        <th scope="col">REMOVER</th>
      </tr>
    </thead>
    
    <tbody id="cart-items">
    <?php

    $totalTempI = 0;
    $totalTemp = [];
    $j = 0;
    for($i=0; $i < count($array); $i++){
        $sql = "Select * From prod where (nome_pro = '$array[$i]')";

        $result = mysqli_query($_con, $sql);
        while ($row = mysqli_fetch_assoc($result)) {
            echo "<tr class='linha'>";
            //echo "<td>" . $row['nome_prod'] . "</td>";
            echo "<td>" . $row['nome_pro'] . "</td>";
            echo "<td>" . $row['valor_venda_pro'] . "</td>";
            echo "<td>";
            echo "<input  type='number' value='1' min='1' class='form-control product-qtd-input totalInput'>";
            echo "</td>";
            echo "<td>";
            echo "<button id='btnremover' type='button' style='margin-top: 0px;' class='btn btnVermelho remove-product-button'><span class='material-icons'>delete</span></button>";
            echo "</td>";
            echo "</tr>";
            
            $totalTemp[$j] = $row['valor_venda_pro'];
            $j++;

    }
   
}

$TotalTempI = $totalTemp[0] + $totalTemp[1] ;
?>


      <tfoot>
        <tr>
          <td colspan="3" class="cart-total-container">
          <form action="realizar_venda.php" method="post">
            <strong>TOTAL</strong>
            <span id='total'><?php echo 'R$' . $TotalTempI ?></span>
            <button id='btnfinalizar' type="submit" class="btn btnVermelho">FINALIZAR COMPRA</button>
            <input id="nome_pro" name="nome_pro" type="hidden">
            <input id="quant_ven_pro" name="quant_ven_pro" type="hidden">
            <input id="subtotal_ven_pro" name="subtotal_ven_pro" type="hidden">
            <input id="data_ven" name="data_ven" type="hidden">
            <input id="totalInput" name="totalInput" type="hidden">
    </form>
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
    <script src="../JS/carrinho.js"></script>
</body>

</html>