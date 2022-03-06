let goAhead=document.querySelector('.ahead-fix');
let element=document.querySelector('#profile');

element.addEventListener("click", function() {
    goAhead.classList.add("ahead-fix-script");

});
 

(function(){
let scrolly = function(){
    var supportPageOffset = window.pageXOffset !== undefined;
    var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
    return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
}

/* 
L'orsque l'on scroll
    Si le menu sort de l'ecran 
    Alors il deviendra fixe
*/
let head= document.querySelector('#profile');
let goAhead= document.querySelector('.ahead-fix');
let bande= document.querySelector('.alert');
let rect= head.getBoundingClientRect();
let top=rect.top + scrolly();
let width=rect.width;
//Les fonctions
let onScroll= function(){
    console.log('En scroll');
    if( scrolly() > top+800){
        goAhead.style.display="block";
    }
    else{
        goAhead.style.display="none";
    }
}

let onResize= function(){
    rect= goAhead.getBoundingClientRect();
    top=rect.top + scrolly();
    let width=rect.width;
    onScroll();
}
//Les listeners
window.addEventListener('scroll', onScroll);
window.addEventListener('resize',onResize);
})();






