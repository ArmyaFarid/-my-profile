let yesElement=document.querySelector('.btn-green');
let noElement=document.querySelector('.btn-red');
let getCvElement=document.querySelector('.getCv-card');
let pageOnBlur=document.querySelector('#principal-center');
let goAhead=document.querySelector('.ahead-fix');
let element=document.querySelector('#profile');

function changePage(whereToGo)
{
    window.location=whereToGo;
}

noElement.addEventListener("click", function() {
    pageOnBlur.style.opacity="1";
    getCvElement.style.display="none";

});

yesElement.addEventListener("click", function() {
    changePage("cv/curriculumvitae.pdf");

});
 

(
function(){
let scrolly = function(){
    var supportPageOffset = window.pageXOffset !== undefined;
    var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
    return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
}


/*let downscroll=function(){
var lastScrollTop = 0;
// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
element.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
   var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   if (st > lastScrollTop){
      return 1;
   } else {
      return 0;
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);}*/

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
    console.log(scrolly());
    console.log(top+800);
    if( scrolly() > top+800){
        goAhead.style.display="block";
        if(scrolly() > top+1500){
            console.log("work");
            pageOnBlur.style.opacity="0.1";
            getCvElement.style.display="block";            
        }
        
    }
    else {
        goAhead.style.display="none";
        pageOnBlur.style.opacity="1";
        getCvElement.style.display="none";
        
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






