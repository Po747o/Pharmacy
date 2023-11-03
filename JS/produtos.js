var botao = document.getElementById(id="addcarrinho");

// Encontre o "card" pai do botão
var card = botao.parentNode;

// Agora você pode trabalhar com o "card" como desejar
console.log(card);

var botoes = document.querySelectorAll('#addcarrinho');

// Adiciona um evento de clique a cada botão
botoes.forEach(function(botao) {
    botao.addEventListener('click', function() {
        // Encontra o "card" pai do botão clicado
        var card = this.closest('.card');
        
        if (card) {
            // Agora você pode trabalhar com o "card" clicado, por exemplo, exibindo seu texto
var cardTexto = card.querySelector('h3').textContent;
            console.log('Clicou no botão do card:', cardTexto);
        }
    });
});