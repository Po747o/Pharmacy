<?php 
$_con = mysqli_connect('127.0.0.1','root','','techpharma');
if($_con===FALSE) {
    echo "Não foi possível conectar ao Servidor de banco de dados ";
} else {
 
    $consultasql = "SELECT * FROM produto";
    $resultado = mysqli_query($_con, $consultasql);
   
}
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="\bootstrap\bootstrap-5.3.0-alpha3-dist\css\bootstrap.min.css">
    <link rel="stylesheet" href="css/layout.css">
    <link rel="stylesheet" href="css/layoutprodutos.css">
    <link rel="shortcut icon" href="imagens/logotechpharma.png" type="image/x-icon">
    <title>TechPharma - Produtos</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css">
</head>

<body>

    <header class="cabecalho">
        <div class="titulo">
            <h1>PRODUTOS</h1>
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
    <main>
        <div class="wrapper">

            <i id="left" class="fa-solid fa-angle-left"></i>
            <ul class="carousel">
                <
                <?php 
                    while($row = mysqli_fetch_array($resultado)) {
                        echo "<div class='card'>";
                        echo "<h2>" . $row["nome_pro"] . "</h2>";
                        echo "<p>" . $row["valor_venda_pro"] . "</p>";
                        echo "</div>";
                    }
                 
                        
                ?>
             

                <li class="card">
                    <div class="img"><img src="imagens/card-xarope.png" alt="img" draggable="false"></div>
                    <h2>XAROPE</h2>
                    <h5>MEDICAMENTOS</h5>
                    <v2>R$ 7,99</v2>
                </li>


                <li class="card">
                    <div class="img"><img src="imagens/card-b12.png" alt="img" draggable="false"></div>
                    <h2>VITAMINA B-12</h2>
                    <h5>VITAMINAS</h5>
                    <v2>R$ 5,99</v2>
                </li>

                <li class="card">
                    <div class="img"><img src="imagens/card-fralda.png" alt="img" draggable="false"></div>
                    <h2>FRALDA INFANTIL</h2>
                    <h5>CUIDADOS INFANTIS</h5>
                    <v1>R$54,99</v1>
                    <v2>R$38,49</v2>
                </li>


                <li class="card">
                    <div class="img"><img src="imagens/card-rexona.png" alt="img" draggable="false"></div>
                    <h2>DESODORANTE AEROSOL</h2>
                    <h5>HIGIENE E CUIDADOS PESSOAIS</h5>
                    <v2>R$ 5,99</v2>
                </li>

                <li class="card">
                    <div class="img"><img src="imagens/card-talco_infantil.png" alt="img" draggable="false"></div>
                    <h2>TALCO INFANTIL</h2>
                    <h5>CUIDADOS INFANTIS</h5>
                    <v2>R$ 5,99</v2>
                </li>
                <li class="card">
                    <div class="img"><img src="imagens/card-repelente.png" alt="img" draggable="false"></div>
                    <h2>REPELENTE</h2>
                    <h5>HIGIENE E CUIDADOS PESSOAIS</h5>
                    <v2>R$ 5,99</v2>
                </li>

                <li class="card">
                    <div class="img"><img src="imagens/card-ibuprofeno.png" alt="img" draggable="false"></div>
                    <h2>IBUPROFENO</h2>
                    <h5>MEDICAMENTOS</h5>
                    <v2>R$ 10,99</v2>
                </li>
            </ul>
            <i id="right" class="fa-solid fa-angle-right"></i>
        </div>

    </main>
    <footer class="footer">
        <div class="corpoFooter">
            <div class="colunaEsquerda">

                <div class="iconphone">
                    <img src="imagens/iconetelefone.png" alt="#">
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
                    <img src="imagens/iconefacebook.png" alt="#">
                    <img src="imagens/iconeinstagram.png" alt="#">
                    <img src="imagens/iconetwitter.png" alt="#">
                    <img src="imagens/iconeyoutube.png" alt="#">
                </div>

            </div>
        </div>
    </footer>
    <script src="JS/ProdutosDes.js" defer></script>
</body>

</html>