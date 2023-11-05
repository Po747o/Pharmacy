var inputhidden = document.querySelector('#inputhidden');

var arrayCarrinho = [];

var botoes = document.querySelectorAll('#addcarrinho');

// Adiciona um evento de clique a cada botão
botoes.forEach(function(botao) {
    botao.addEventListener('click', function() {
        // Encontra o "card" pai do botão clicado
        var card = this.closest('.card');//Armazena o card inteiro
        
        if (card) {
            // Agora você pode trabalhar com o "card" clicado, por exemplo, exibindo seu texto
            var cardTexto = card.querySelector('h2').textContent;
            arrayCarrinho.unshift(cardTexto);
            inputhidden.value = arrayCarrinho.join(', ');
            console.log('Clicou no botão do card:', cardTexto);
            console.log(inputhidden.value);
            botao.disabled = true;
            
        }
        // Função para desabilitar o botão após o clique
        

        // Adiciona um event listener para escutar o clique no botão
        
    });


});