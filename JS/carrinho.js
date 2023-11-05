var botoesRemover = document.querySelectorAll('#btnremover');
var totalInputs = document.querySelectorAll('.totalInput');

// Adicione um ouvinte de evento de clique a cada botão de remoção
botoesRemover.forEach(function(botaoRemover) {
    botaoRemover.addEventListener('click', function() {
        // Encontre o "tr" pai da linha da tabela
        var linha = this.closest('tr');

        if (linha) {
            // Remova a linha da tabela
            linha.remove();
            linha.classList.add('removido');

                 var total = 0; // Zere o total para recalcular
          
                  linhas.forEach(function(linha) {
                    if (!linha.classList.contains('removido')) {
                    
                      var preco = parseFloat(linha.querySelector('td:nth-child(2)').textContent); // Preço do produto
                      var quantidade = parseInt(linha.querySelector('.totalInput').value); // Quantidade do produto
                      var subtotal = preco * quantidade;
                      total += subtotal;
                  }});
          
                  var totalTxt = document.querySelector('#total');
                  totalTxt.innerHTML = 'R$' + total.toFixed(2);
        }
    });
});

// Selecione o botão "Finalizar Compra" pelo ID
var botaoFinalizarCompra = document.querySelector('#btnfinalizar');
var linhas = document.querySelectorAll('.linha');
var total = 0;



totalInputs.forEach(function(totalInput) {
  
    totalInput.addEventListener("change", function() {
        total = 0; // Zere o total para recalcular

        linhas.forEach(function(linha) {
          if (!linha.classList.contains('removido')) {
            var preco = parseFloat(linha.querySelector('td:nth-child(2)').textContent); // Preço do produto
            var quantidade = parseInt(linha.querySelector('.totalInput').value); // Quantidade do produto
            var subtotal = preco * quantidade;
            total += subtotal;
        }});

        var totalTxt = document.querySelector('#total');
        totalTxt.innerHTML = 'R$' + total.toFixed(2);
    });
});



// Adicione um ouvinte de evento de clique ao botão
botaoFinalizarCompra.addEventListener('click', function() {
    // Coletar informações dos produtos na tabela
    var produtos = [];
    var total = 0;

    linhas.forEach(function(linha) {
      if (!linha.classList.contains('removido')) {
        var nome = linha.querySelector('td:nth-child(1)').textContent; // Nome do produto
        var preco = parseFloat(linha.querySelector('td:nth-child(2)').textContent); // Preço do produto
        var quantidade = parseInt(linha.querySelector('input').value); // Quantidade do produto

        var subtotal = preco * quantidade;
        total += subtotal;
        var inputTotal = document.querySelector('#totalInput');
        inputTotal.value = total;
        
        produtos.push({
            nome: nome,
            preco: preco,
            quantidade: quantidade,
            subtotal: subtotal
        });

       

        
    }});

    // Agora você tem o array 'produtos' com informações de cada produto e o 'total' da venda
    
    var totalTxt = document.querySelector('#total');
    totalTxt.innerHTML = 'R$'+total;

    var dataAtual = new Date();
    var dataFormatada = dataAtual.getFullYear() + '-' + (dataAtual.getMonth() + 1) + '-' + dataAtual.getDate(); 
    console.log(dataFormatada);

    var arrayNome = [];
    var arrayQuantidade = [];
    var arraySubtotal = [];


    for(i = 0; i <produtos.length; i++){
        arrayNome[i] = produtos[i].nome;
        arrayQuantidade[i] = produtos[i].quantidade;
        arraySubtotal[i] = produtos[i].subtotal;
    }

    var inputNome = document.querySelector('#nome_pro');
    var inputQuant = document.querySelector('#quant_ven_pro');
    var inputSubtotal = document.querySelector('#subtotal_ven_pro');
    var inputData = document.querySelector('#data_ven');

    /*console.log(inputNome);
    console.log(arrayNome);*/
   
       
    
    inputNome.value = arrayNome.join(', ');
    inputQuant.value = arrayQuantidade.join(', ');
    inputSubtotal.value = arraySubtotal.join(', ');
    inputData.value = dataFormatada;

    var inputTotal = document.querySelector('#totalInput');
        inputTotal.value = total;

    console.log(inputNome.value);
    console.log(inputQuant.value);
    console.log(inputSubtotal.value);
    console.log(inputData.value);

    console.log(inputTotal.value);
    

});

 

  /* produto_nome.push(produtos[i].nome) => ibuprofeno
           produto_quant.push(produtos[i].quant) => 3
           produto_nome.push(produtos[i].nome) => dipirona
           produto_quant.push(produtos[i].quant) => 1
           
           produto_nome[1] = ibuprofeno,dipirona
           produto_quant[1] = 3,1
        */ 
