/**
 * Eventos de teclado UX
 */

let btnScrollTop;
window.addEventListener('load', ()=>{
    redirectToHttps();
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

// Verifica si el protocolo actual es HTTP
function redirectToHttps() {
    if (window.location.protocol === 'http:') {
      var newUrl = 'https:' + window.location.href.substring(5);
      window.location.href = newUrl;
    }
  }