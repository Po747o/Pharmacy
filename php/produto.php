<?php
//$carrinhoArray = $_POST("arrayCarrinho[]");
$_con = mysqli_connect('127.0.0.1','root','','techpharma');
if($_con===FALSE) {
    echo '<script>alert("Não foi possível conectar ao Servidor de banco de dados");</script>';  
} else {

    $sql= "Select * from prod";
    $result=mysqli_query($_con,$sql);

    

    
}
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../\bootstrap\bootstrap-5.3.0-alpha3-dist\css\bootstrap.min.css">
    <link rel="stylesheet" href="../css/layout.css">
    <link rel="stylesheet" href="../css/layoutprodutos.css">
    <link rel="shortcut icon" href="../imagens/logotechpharma.png" type="image/x-icon">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
    <title>TechPharma - Produtos</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css">
</head>

<body>

    <header class="cabecalho">
        <div class="titulo">
            <h1>PRODUTOS</h1>
            <form action="../php/carrinho.php" method="post">
                <input name="arrayCarrinho" type="hidden" id="inputhidden">
                <button type="submit" class="btn btnVermelho containerCarrinho" style="position: relative; right: 0; z-index: 2; margin-top: -60px; background-color: none;"><span class="material-symbols-outlined">shopping_cart_checkout</span></button>
            </form>
        </div>
    </header>
    <nav class="topnav">
        <div class="menu">
            <a href="home.html">HOME</a>
            <a href="produto.php">PRODUTOS</a>
            <a href="servicosevacinas.html">SERVIÇOS E VACINAS</a>
            <a href="atendimento.html">ATENDIMENTO</a>
            <a href="quemsomos.html">QUEM SOMOS</a>
        </div>
    </nav>

    <main>
        <div class="wrapper">

            <i id="left" class="fa-solid fa-angle-left"></i>
            <ul class="carousel">


            <?php
             
              while ($row = mysqli_fetch_assoc($result)) {
            
            
              echo '<li class="card">';
              $imagem_base64 = base64_encode($row['imagem_pro']);
              echo '<img class="img" src="data:image/jpeg;base64,'. $imagem_base64 .'" alt="img" draggable="false"/>';
              echo '<h2>'. $row["nome_pro"] .'</h2>';
              echo '<h2>'. $row["tipo_pro"] .'</h2>';
              echo '<v2>'. $row["valor_venda_pro"] .'</v2>';
              echo '<button id="addcarrinho" class="btn btnVermelho"><span class="material-symbols-outlined">add_shopping_cart</span></button>';
              echo '</li>';
                
              /*
               $imagem_base64 = base64_encode($row['imagem_pro']);
                  echo '<img src="data:image/jpeg;base64,' . $imagem_base64 . '"/><br>';
              */
            }
             ?>
                <!--<li class="card">
                    <div class="img"><img src="imagens/card-xarope.png" alt="img" draggable="false"></div>
                    <h2>XAROPE</h2>
                    <h2>MEDICAMENTOS</h2>
                    <v2>R$7,99</v2>
                    <button id="addcarrinho" class="btn btnVermelho"><span class="material-symbols-outlined">add_shopping_cart</span></button>
                </li> -->

            </ul>
            <i id="right" class="fa-solid fa-angle-right"></i>
        </div>      

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
        </div>
    </footer>
    <script src="../JS/produtocarrinho.js" defer></script>
</body>

</html>