const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCarWhidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];

let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;
let cardPerView = Math.round(carousel.offsetwidth / firstCarWhidth);

carouselChildrens.slice(-cardPerView).reverse().forEach(card =>{
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

carouselChildrens.slice(0, cardPerView).forEach(card =>{
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetwidth;
carousel.classList.remove("no-transition");


arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCarWhidth : firstCarWhidth;
    });
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return;
    console.scrollLeft = startScrollLeft - (e.pageX - startX);//barra de rolagem
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const infiniteScroll = () => {
    if(carousel.scrollLeft ===0){
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 *  carousel.offsetwidth);
        carousel.classList.remove("no-transition");
    }

    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetwidth){
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetwidth;
        carousel.classList.remove("no-transition");
    }

    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}

const autoPlay = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return;
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCarWhidth, 2500);
}
autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);

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
        var card = this.closest('.card');//Armazena o card inteiro
        
        if (card) {
            // Agora você pode trabalhar com o "card" clicado, por exemplo, exibindo seu texto
            var cardTexto = card.querySelector('h2').textContent;
            console.log('Clicou no botão do card:', cardTexto);
        }
    });
});
