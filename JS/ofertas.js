const allFilterItems = document.querySelectorAll('.card');
const allFilterBtns = document.querySelectorAll('.filtro-btn');



allFilterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        showFilteredContent(btn);
    });
});

function showFilteredContent(btn){
    allFilterItems.forEach((card) => {
        if(card.classList.contains(btn.id)){           
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
