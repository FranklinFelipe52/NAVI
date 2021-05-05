
//animação do menu sticky
//obtem o menu
//cria uma evento scroll
//a logica é que a partir da distancia do scroll da parte superior, add uma classe chamada menu-sticky
var nav = document.querySelector('nav');
addEventListener('scroll', function(){
    if(pageYOffset>80){
        if(!nav.classList.contains('menu-sticky')){
             nav.classList.add('menu-sticky')
        }    
    }else{
        if(nav.classList.contains('menu-sticky') && pageYOffset==0){
             nav.classList.remove('menu-sticky')
        }     
    }
})
//1-links internos do menu suave
//2-fazer menu flutuante desaparecer quando clicar no link
var links = document.querySelectorAll('.nav-item a');
var menuFloat = document.querySelector('#navbarNav');
var seta = document.querySelector('.seta');
links.forEach(function(element){
    console.log(element)
    element.addEventListener('click',function(event){
        //1
        const id =event.target.getAttribute('href');
        event.preventDefault();
        scrollToElement(id);
        //2
        if(menuFloat.classList.contains('show')){
             menuFloat.classList.remove('show');
        }      
    })
})
//link interno da seta
seta.addEventListener('click',function(event){
    event.preventDefault();
    scrollToElement ('#CA');
})
//link suave da logo
var linkHOME = document.querySelector('.navbar-brand').addEventListener('click', function(event){
    event.preventDefault();
    scrollToElement ('#principal');
})
function scrollToElement (element){
    document.querySelector(element).scrollIntoView({behavior: 'smooth'})
}