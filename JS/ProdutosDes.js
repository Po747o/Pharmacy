const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".wrapper i");
const firstCarWhidth = carousel.querySelector(".card").offsetwidth;

let isDragging = false, startX, startScrollLeft;

arrowBtns.forEach(btn=>{
    btn.addEventListener("click", ()=>{
        carousel.scrollLeft += btn.id === "left" ? -firstCarWhidth : firstCarWhidth;
    })
})

const dragStart = (e) =>{
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return;
    console.scrollLeft = startScrollLeft - (e.pageX - startX);//barra de rolagem
}

const dragStop = () =>{
    isDragging = false;
    carousel.classList.remove("dragging");
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);