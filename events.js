/**
 * Eventos de teclado UX
 */

let btnScrollTop;
window.addEventListener('load', ()=>{
    document.querySelector('.scroll-top').addEventListener('click', ClickScrollTop);
    btnScrollTop = document.querySelector(".scroll-top");
    window.onscroll = function() {ShowScroll()};
});



function ShowScroll(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnScrollTop.style.display = "block";
    } else {
        btnScrollTop.style.display = "none";
    }    
}

function ClickScrollTop(){
    window.scrollTo({top: 0, behavior: 'smooth'});
}